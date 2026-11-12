---
title: "avg - Anti-Virus scanner plugin for Haraka"
description: "Haraka avg plugin - Anti-Virus scanner"
canonical_url: "https://haraka.github.io/plugins/avg"
---
# avg - Anti-Virus scanner plugin for Haraka

> Haraka avg plugin - Anti-Virus scanner

Implement virus scanning with AVG's legacy TCPD daemon which was available for Linux/FreeBSD.

Messages that AVG detects as infected are rejected. Errors will cause the plugin to return temporary failures unless the defer options are changed (see below).

## Configuration

The following options can be set in avg.ini:

- port (default: 54322)<br />

TCP port to communicate with the AVG TCPD on.
- tmpdir (default: /tmp)<br />

AVG TCPD requires that the message be written to disk and scanned.  This setting configures where any temporary files are written to. After scanning, the temporary files are automatically removed.
- connect_timeout (default: 10)<br />

Maximum seconds to wait for the socket to connect. Connections taking longer will cause a temporary failure to be sent to the remote MTA.
- session_timeout<br />

Maximum number of seconds to wait for a reply to a command before failing.  A timeout will cause a temporary failure to be sent to the remote MTA.
- <span>

defer

</span>

By default, this plugin defers when errors or timeouts are encountered. To
fail open (let messages pass when errors are enounctered), set the error
and/or timeout values to false.

```text
[defer]
error=true
timeout=true
```


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
