---
title: dns-list - DNS Blacklists plugin for Haraka
description: Haraka dns lists plugin - DNS Blacklists
navigation.title: dns-list
---

# haraka-plugin-dns-list

## dns lists

Looks up the IP address of the remote host in DNS lists. There are several types of DNS based lists:

### block

Block lists (aka: DNSBL) are designed to be used for blocking mail from any host listed in them. Block lists are the most common DNS list type and lists without a type specified are considered block lists. The default action for block lists is to reject the connection. This can be changed by setting `reject=false` in the zone's settings block.

### allow

When the remote IP is found in an allow list, this plugin returns OK for the ehlo, helo, and mail hooks.

IMPORTANT! The order of plugins in config/plugins is important when this feature is used. It should be listed _before_ any plugins that you wish to skip, but after any plugins that accept recipients.

### karma

Karma lists can have different results for IPs beyond a simple block or allow. See [hostkarma.junkemailfilter.com](https://hostkarma.junkemailfilter.com) for details.

## INSTALL

```sh
cd /path/to/local/haraka
npm install haraka-plugin-dns-list
echo "dns-list" >> config/plugins
service haraka restart
```

## Configure

If the default configuration is insufficient, copy the config file from the distribution into your haraka config dir and modify it:

```sh
cp node_modules/haraka-plugin-dns-list/config/dns-list.ini config/dns-list.ini
$EDITOR config/dns-list.ini
```

dns-lists.ini - INI format with options described below:

#### [main] periodic_checks=30

Check every DNS zone every `N` minutes. When the value is less than 5, checks will only be run at start-up.

The checks confirm that lists are responding correctly. When errors are detected, the zone is disabled and will be checked at the next interval. When a zone resumes working correctly it will be enabled.

#### [main] zones

An array or comma separated list of zones to query.

#### [main] search: (default: all)

- first: consider first DNS list response conclusive. End processing.
- all: process all DNS list results

#### [stats] enable=true

This feature requires the [redis](https://github.com/haraka/haraka-plugin-redis) plugin. When enabled, this will record several list statistics to redis:

- the total number of queries (TOTAL)
- the average response time (AVG_RT)
- the return type (e.g. LISTED or ERROR)

to a redis hash where the key is `dns-list-stat:zone` and the hash field is the response type.

It will also track the positive response overlap between the lists in another redis hash where the key is `dns-list-overlap:zone` and the hash field is the other list names. Example:

```
redis 127.0.0.1:6379> hgetall dns-list-stat:zen.spamhaus.org
1) "TOTAL"
2) "23"
3) "ENOTFOUND"
4) "11"
5) "LISTED"
6) "12"
7) "AVG_RT"
8) "45.5"

redis 127.0.0.1:6379> hgetall dns-list-overlap:zen.spamhaus.org
1) "b.barracudacentral.org"
2) "1"
3) "bl.spamcop.net"
4) "1"
5) "TOTAL"
6) "1"
```

#### [stats] redis_host

In the form of `host:port` this option allows you to specify a different host on which redis runs.

### Per-Zone DNS list settings

The exact name of the DNS zone (as specified above in main.zones) may contain settings about that DNS list.

- type=[ block, allow, karma ]
- reject=true (default: true) Reject connections from IPs on block lists. Setting this to false makes dnsbl informational. reject=false is best used in conjunction with plugins like [karma](https://github.com/haraka/haraka-plugin-karma) that employ a scoring engine to make choices about message delivery.
- ipv6=true | false

#### dnswl

```ini
ok_helo=false
ok_mail=false
```

if DNSBL returns OK on the mail hook, it prevents any subsequent mail hooks in other plugins from running. This might include [SPF](https://github.com/haraka/haraka-plugin-spf), [known senders](https://github.com/haraka/haraka-plugin-known-senders), [karma](https://github.com/haraka/haraka-plugin-karma), recipient plugins, and any other plugins that want to do transaction initialization on `hook_mail`. It can be dangerous.

