---
title: "queue/smtp_proxy - Deliver mail to the proxy MTA"
description: "Haraka queue/smtp_proxy plugin - Deliver mail to the proxy MTA"
canonical_url: "https://haraka.github.io/plugins/queue/smtp_proxy"
---
# queue/smtp_proxy - Deliver mail to the proxy MTA

> Haraka queue/smtp_proxy plugin - Deliver mail to the proxy MTA

This plugin delivers to another mail server. This is a common setup when you
want to have a mail server with a solid pedigree of outbound delivery to
other hosts, and inbound delivery to users.

In comparison to `queue/smtp_forward`, this plugin makes a connection at
MAIL FROM time to the ongoing SMTP server. This can be a benefit in that
you get any SMTP-time filtering that the ongoing server provides, in
particular one important facility to some setups is recipient filtering.
However be aware that other than connect and HELO-time filtering, you will
have as many connections to your ongoing SMTP server as you have to Haraka.

## Configuration

- smtp_proxy.ini<br />

Configuration is stored in this file in the following keys:
  - enable_outbound=<span>
  
  true
  
  </span><br />

SMTP proxy outbound messages (set to false to enable Haraka's
separate Outbound mail routing (MX based delivery)).
  - host=HOST<br />
  
  The host to connect to.
  - port=PORT<br />
  
  The port to connect to.
  - connect_timeout=SECONDS<br />
  
  The maximum amount of time to wait when creating a new connection
  to the host.  Default if unspecified is 30 seconds.
  - timeout=SECONDS<br />
  
  The amount of seconds to let a backend connection live idle in the
  proxy pool.  This should always be less than the global plugin timeout,
  which should in turn be less than the connection timeout.
  - max_connections=NUMBER<br />
  
  Maximum number of connections to create at any given time.
  - enable_tls=<span>
  
  true|yes|1
  
  </span>
  
  <br />
  
  Enable TLS with the forward host (if supported). TLS uses options from
  the tls plugin.
  - auth_type=<span>
  
  plain|login
  
  </span>
  
  <br />
  
  Enable PLAIN or LOGIN SMTP AUTH.  This is required to enable AUTH.
  - auth_user=USERNAME<br />
  
  SMTP AUTH username to use.
  - auth_pass=PASSWORD<br />
  
  SMTP AUTH password to use.


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
