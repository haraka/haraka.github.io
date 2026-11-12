---
title: "Greylist - Greylisting plugin for Haraka"
description: "Haraka greylist plugin - Delays delivery of mail from new senders"
canonical_url: "https://haraka.github.io/plugins/greylist"
---
# Greylist - Greylisting plugin for Haraka

> Haraka greylist plugin - Delays delivery of mail from new senders

Basic greylisting plugin that follows common practices found on internets.

## Principles of work

### Notation

The so-called *tuple* consists of the following:

- First subdomain of rDNS is stripped off (but no shorter than the domain boundary). This is considered a *hostid*.
- Envelope sender is the *sender*.
- RCPT TO would supply the *recipient*.

*hostid* in above notation is chosen unless:

1. The connecting host has no PTR record, a.k.a. reverse DNS (rDNS). <span>

gl

</span>
2. The rDNS record contains the first two or last two octets of the IP address. <span>

fcrdns

</span>
3. The rDNS record contains the ‘short’, decimal, or hex representation of the full IP address. <span>

fcrdns

</span>

 <span>

gl

</span>
4. Multiple rDNS records are returned. <span>

gl

</span>
5. The rDNS record cannot be verified by forward confirmation (e.g. FCrDNS). <span>

fcrdns

</span>
6. The top-level-domain (TLD) used is not valid. <span>

gl

</span>

In other cases, it's set to be the remote party's IP address.

We define the following time periods:

- *black*:  between first connect and start of *gray*. Defer.
- *gray*:   between *black* and start of *white*. Allow. Host must re-try within this window.
- *white*:  comes after *gray*. Allow up until the end of period, then let the record expire in case no connections were made.

### Algorithm

The greylist algo is as following:

- Party connects. All FcrDNS & DNSWL checks are run by earlier plugins.
- Party sends *recipient*
  - If not already whitelisted
  
    - Check *tuple* color (compare current TS against record creation TS)
    
      - *black*?
      
        - Create if no record exists. Defer.
      - *gray*?
      
        - Allow. Promote record to *white* status.
      - *white*?
      
        - Allow. Update record TS.
- In special case, *data* hook runs above algo for all recipients. If any matched, all inherit the action.

### DB schema

We store in Redis.

Key format for greylisting entries:

- grey:${hostid}:${sender}:${recipient} - grey record
- white:${hostid} - white record

For *white*:

```text
{ first_connect: TS, whitelisted: TS, updated: TS, lifetime: TTL, tried: Integer, tried_when_greylisted: Integer }
```

Where
*first_connect*: TS of first connection (sender)
*whitelisted*: basically the TS of this entry creation
*updated*: last update TS
*lifetime*: seconds for this entry to exist (== TTL)
*tried*: number of checks against this entry
*tried_when_greylisted*: number of checks while the host was +grey+ (sender).

For *grey*:

```text
{ created: TS, updated: TS, lifetime: TTL, tried: Integer }
```

Where
*created*: TS of first connection (copied to *first_connect* of *white* after promotion)
*updated*: last update TS
*lifetime*: seconds for this entry to exist (== TTL)
*tried*: number of checks against this entry (copied to *tried_when_greylisted* of *white* after promotion)

### Whitelisting

It's possible to whitelist hosts using the following section in greylist.ini config file:

- ip_whitelist               IP or subnet (prefix notation)
- envelope_whitelist         MAIL FROM (email or domain)
- recipient_whitelist        RCPT TO  (email or domain)

List of known dynamic hosts, to use the IP instead of the domain:

- special_dynamic_domains    Domain


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
