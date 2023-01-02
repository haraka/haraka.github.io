---
title: avg - Anti-Virus scanner plugin for Haraka
description: Haraka avg plugin - Anti-Virus scanner
navigation.title: avg
---

# Avg plugin

Implement virus scanning with AVG's legacy TCPD daemon which was available for Linux/FreeBSD.

Messages that AVG detects as infected are rejected. Errors will cause the plugin to return temporary failures unless the defer options are changed (see below).

## Configuration

The following options can be set in avg.ini:

* port (default: 54322)

    TCP port to communicate with the AVG TCPD on.

* tmpdir (default: /tmp)

    AVG TCPD requires that the message be written to disk and scanned.  This setting configures where any temporary files are written to. After scanning, the temporary files are automatically removed.

* connect\_timeout (default: 10)

    Maximum seconds to wait for the socket to connect. Connections taking longer will cause a temporary failure to be sent to the remote MTA.

* session\_timeout

    Maximum number of seconds to wait for a reply to a command before failing.  A timeout will cause a temporary failure to be sent to the remote MTA.

* [defer]

By default, this plugin defers when errors or timeouts are encountered. To
fail open (let messages pass when errors are enounctered), set the error
and/or timeout values to false.

    [defer]
    error=true
    timeout=true