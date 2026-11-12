---
title: "early_talker - Connection Delays plugin for Haraka"
description: "Haraka early_talker plugin - Connection Delays"
canonical_url: "https://haraka.github.io/plugins/early_talker"
---
# early_talker - Connection Delays plugin for Haraka

> Haraka early_talker plugin - Connection Delays

Early talkers are violators of the SMTP specification, which require that
clients must wait for certain responses before sending the next command.

This plugin introduces a configurable delay before the connection banner
and after the DATA command for Haraka to detect if it talks early.

If an early talker is detected at connection or DATA, then a DENY is
returned with the message 'You talk too soon'.

## Configuration

The config file early_talker.ini has two options:

- pause: the delay in seconds before each SMTP command. Default is no pause.
- reject: whether or not to reject for early talkers. Default is true;
- <span>

ip_whitelist

</span>

: list of IP addresses and/or subnets to whitelist


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
