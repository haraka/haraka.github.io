---
title: "queue/qmail-queue - Deliver mail to the local MTA"
description: "Haraka queue/qmail-queue plugin - Deliver mail to the local MTA"
canonical_url: "https://haraka.github.io/plugins/queue/qmail-queue"
---
# queue/qmail-queue - Deliver mail to the local MTA

> Haraka queue/qmail-queue plugin - Deliver mail to the local MTA

This plugin delivers the mail to the `qmail-queue` program, which can be used
for both inbound and outbound delivery.

## Configuration

- qmail-queue.path<br />

The path to the `qmail-queue` binary. Default: `/var/qmail/bin/qmail-queue`
- qmail-queue.ini
  - enable_outbound=true<br />
  
  Deliver outbound email to qmail. Set to false to use Haraka's
  separate Outbound mail routing (MX based delivery)).


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
