---
title: "backscatterer - Backscatterer plugin for Haraka"
description: "Haraka backscatterer plugin - Detects and rejects backscatter"
canonical_url: "https://haraka.github.io/plugins/backscatterer"
---
# backscatterer - Backscatterer plugin for Haraka

> Haraka backscatterer plugin - Detects and rejects backscatter

This is a very basic pluign that checks the connecting IP against
ips.backscatterer.org when the envelope-from is null or postmaster@
as per the instructions at [http://www.backscatterer.org/?target=usage](http://www.backscatterer.org/?target=usage)

This plugin is used to reject misdirected bounces and autoresponders
and sender callouts from abusive systems which can happen when a
local domain is spoofed and used as the envelope-from in a spam run.


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
