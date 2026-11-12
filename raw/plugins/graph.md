---
title: "graph - Graphs plugin for Haraka"
description: "Haraka graph plugin - Graphs"
canonical_url: "https://haraka.github.io/plugins/graph"
---
# graph - Graphs plugin for Haraka

> Haraka graph plugin - Graphs

This plugin logs accepted and rejected emails into a database and provides
a web server which you can browse to and view graphs over time of the
plugins which rejected connections.

In order for this to work you need to install the `sqlite3` module via
`npm install sqlite3` in your Haraka directory.

## Configuration

config settings are stored in config/graph.ini

- db_file<br />

The file name (or :memory:), where data is stored
- http_addr<br />

The IP address to listen on for http. Default: `127.0.0.1`.
- http_port<br />

The port to listen on for http. Default: `8080`.
- ignore_re<br />

Regular expression to match plugins to ignore for logging.
Default: `queue|graph|relay`


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
