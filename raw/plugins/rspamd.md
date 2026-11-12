---
title: "rspamd - Rspamd plugin"
description: "Haraka rspamd plugin - Rspamd plugin"
canonical_url: "https://haraka.github.io/plugins/rspamd"
---
# rspamd - Rspamd plugin

> Haraka rspamd plugin - Rspamd plugin

This plugin facilitates scanning messages with Rspamd.

## Configuration

rspamd.ini

- host<br />

Default: localhost<br />

Host to connect to to query Rspamd.
- port<br />

Default: 11333<br />

Port Rspamd is listening on.
- add_headers<br />

Default: sometimes<br />

Possible values are:```text
"always" - always add headers
  "never" - never add headers (unless provided by rspamd - see rmilter\_headers)
  "sometimes" - add headers when rspamd recommends `add header` action
```

<br />

Format of these headers is governed by header.* settings
- reject.message<br />

Default: Detected as spam<br />

Message to send when rejecting mail due to Rspamd policy recommendation.
- reject.spam<br />

Default: true<br />

If set to false, ignore recommended *reject* action from Rspamd (except
for authenticated users).
- reject.authenticated<br />

Default: false<br />

Reject messages from authenticated users if Rspamd recommends *reject*.
- check.authenticated<br />

Default: false<br />

If true, messages from authenticated users will not be scanned by Rspamd.
- check.private_ip<br />

Default: false<br />

If false, messages from private IPs will not be scanned by Rspamd.
If true, messages from private IPs will be scanned by Rspamd.
- dkim.enabled<br />

Default: true<br />

If set to true, allow rspamd to add DKIM signatures to messages.
- header.bar<br />

Default: undefined<br />

If set, add a visual spam level in a header with this name.
- header.report<br />

Default: undefined<br />

If set, add information about symbols matched & their scores in a header
with this name.
- header.score<br />

Default: undefined<br />

If set, add the numeric spam score in a header with this name.
- rmilter_headers.enabled<br />

Default: true<br />

If set to true, allow rspamd to add/remove headers to messages via [task:rmilter_set_reply()](https://www.rspamd.com/doc/modules/milter_headers.html).
- soft_reject.enabled<br />

Default: true<br />

If set to true, allow rspamd to defer messages.
- soft_reject.message<br />

Default: Deferred by policy<br />

Message to send to remote server on rspamd soft rejection.
- spambar.positive<br />

Default: +<br />

Used as character for visual spam-level where score is positive.
- spambar.negative<br />

Default: -<br />

Used as character for visual spam-level where score is negative.
- spambar.neutral<br />

Default: /<br />

Used as character for visual spam-level where score is zero.
- timeout (in seconds)<br />

Default: 29 seconds<br />

How long to wait for a response from rspamd.


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
