---
title: prevent_credential_leaks - Prevent credential leaks plugin for Haraka
description: Haraka prevent_credential_leaks plugin - Prevent credential leaks
navigation.title: prevent_credential_leaks
---

# prevent_credential_leaks plugin

This plugin prevents an authenticated user (via SMTP AUTH) from sending
their username and password out in a message (e.g. like replying to a
phish).

If their username and password are detected inside the message body, then
the message is rejected with the message:

`````
Credential leak detected: never give out your username/password to anyone!
`````

Note that if the username is qualified e.g. user@domain.com - then the
plugin will search for both `user` and `user@domain.com` for maximum 
effectiveness.


Configuration
-------------

No configuration is required.  Simply add the plugin to your `config/plugins`
file.  It should be added before any other plugins that run on hook_data_post
for maximum efficiency.

