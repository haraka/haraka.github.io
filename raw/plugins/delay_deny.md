---
title: "delay_deny - Connection Delays plugin for Haraka"
description: "Haraka delay_deny plugin - Connection Delays"
canonical_url: "https://haraka.github.io/plugins/delay_deny"
---
# delay_deny - Connection Delays plugin for Haraka

> Haraka delay_deny plugin - Connection Delays

Delays all pre-DATA 'deny' results until the recipients are sent
and all post-DATA commands until all hook_data_post plugins have run.
This allows relays and authenticated users to bypass pre-DATA rejections.

## Configuration

Configuration options are in config/delay_deny.ini.

This plugin operates in one of two modes: included and excluded.

### included plugins

A comma or semicolon separated list of denials that are to be included.
In this mode, *only* plugins in the list are bypassed. All other plugins
can immediately reject connections.

### excluded plugins

A comma or semicolon separated list of denials that are to be excluded.
Excluded plugins that are not bypassed and can still immediately reject
connections.


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
