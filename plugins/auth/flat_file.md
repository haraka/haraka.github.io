---
title: "auth/flat_file - Authenticate users against a flat file"
description: "Haraka auth/flat_file plugin - Authenticate users against a flat file"
canonical_url: "https://haraka.github.io/plugins/auth/flat_file"
---
# auth/flat_file - Authenticate users against a flat file

> Haraka auth/flat_file plugin - Authenticate users against a flat file

The `auth/flat_file` plugin allows you to create a file containing username
and password combinations, and have relaying users authenticate from that
file.

Note that passwords are stored in clear-text, so this may not be a great idea
for large scale systems. However the plugin would be a good start for someone
looking to implement authentication using some other form of auth.

**Security** - it is recommended to switch to [auth-encfile](https://github.com/AuspeXeu/haraka-plugin-auth-enc-file)
to protect your user credentials.

**IMPORANT NOTE** - this plugin requires that STARTTLS be used via the tls plugin
before it will advertise AUTH capabilities by the EHLO command.  This is to
improve security out-of-the-box.   Localhost and any IP in RFC1918 ranges
are automatically exempt from this rule.

## Configuration

Configuration is stored in `config/auth_flat_file.ini` and uses the INI
style formatting.

Authentication methods are listed in the `[core]` section under `methods`
parameter. Lists of authentification methods are comma separated. Currently
supported methods are: `CRAM-MD5`, `PLAIN` and `LOGIN`. The `PLAIN`
and `LOGIN` methods are not secure. That is why TLS is required before AUTH is
offered.

Example:

```text
[core]
methods=PLAIN,LOGIN,CRAM-MD5
```

Users are stored in the `[users]` section.

Example:

```text
[users]
user1=password1
user@domain.com=password2
```


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
