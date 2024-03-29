---
title: spamassassin - SpamAssassin integration for Haraka
description: Haraka spamassassin plugin - SpamAssassin integration for Haraka
navigation.title: spamassassin
---

# SpamAssassin plugin

This plugin implements the spamd protocol and will send messages to
spamd for scoring.

Configuration
-------------

spamassassin.ini

- spamd\_socket = \[host:port | /path/to/socket\]  *optional*

    Default: localhost:783

    Host or path to socket where spamd is running.

- spamd\_user = \[user\]   *optional*

    Default: default

    Username to pass to spamd.  This is useful when you are running
    spamd with virtual users.

    You can also pass this value in dynamically by setting:

    1. `connection.transaction.notes.spamd_user` in another plugin.

    2. The special username: _first-recipient_. The first envelope recipient
       will be used as the username.

    3. the special username _all-recipients_ may eventually be supported. See
       the get_spamd_username function in the plugin.

- max\_size = N  *optional*

    Default: 500000

    Maximum size of messages (in bytes) to send to spamd.
    Messages over this size will be skipped.

- reject\_threshold = N   *optional*

    Default: none (do not reject any mail)

    SpamAssassin score at which the mail should be rejected.

- relay\_reject\_threshold = N  *optional*

    Default: none

    As above, except this threshold only applies to connections
    that are relays (e.g. AUTH) where connection.relaying = true.
    This is used to set a *lower* thresold at which to reject mail
    from these hosts to prevent sending outbound spam.

    If this is not set, then the `reject_thresold` value is used.

- munge\_subject\_threshold = N  *optional*

    Default: none (do not munge the subject)

    Score at which the subject should be munged (prefixed).

- subject\_prefix = \[prefix\]   *optional*

    Default: *** SPAM ***

    Prefix to use when munging the subject.

- old\_headers\_action = \[rename | drop | keep\]   *optional*

    Default: rename

    If old X-Spam-\* headers are in the email, what do we do with them?

    `rename` them to X-Old-Spam-\*.

    `drop` will delete them.

    `keep` will keep them (new X-Spam-\* headers appear lower down in
    the headers then).

- connect\_timeout = N  *optional*

    Default: 30

    Time in seconds to wait for a connection to spamd

- results\_timeout = N  *optional*

    Default: 300

    Time in seconds to wait for results from spamd


[check]
=======

The optional check section can allow skipping SpamAssassin check for remote connection
meeting following criteria.

- authenticated

    Default: true

    If true, messages from authenticated users will be scored.

- private\_ip

    Default: true

    If true, messages from private IPs will be scored.

- local\_ip

    Default: true

    If true, messages from localhost will be scored.

- relay

    Default: true

    If true, messages that are to be relayed will be scored.

[defer]
=======

The optional defer section can allow returning a DENYSOFT status back to the
client.  Setting these to true will force the client to retry later in cases where
spamassassin is not responding properly.  If set to false, then the errors
will be ignored and message processing will continue.

- error

  Default: false

  If true, return DENYSOFT on socket errors

- connect\_timeout

  Default: false

  If true, return DENYSOFT on socket connection timeouts

- scan\_timeout

  Default: false

  If true, return DENYSOFT on scan timeouts

Extras
======

A SpamAssassin plugin can be found in the `contrib` directory.
The `Haraka.\[pm|cf\]` files should be placed in the SpamAssassin local
site rules directory (/etc/mail/spamassassin on Linux), spamd should be
restarted and the plugin will make spamd output the Haraka UUID as part
of its log output to aid debugging when searching the mail logs.


Changes
--------------

This plugin now passes the X-Spam-\* headers generated by SA through
unaltered. You can control the presence and appearance of X-Spam-\*
headers by editing your SpamAssassin config.

The default headers added by SpamAssassin are:

    add_header all Checker-Version SpamAssassin _VERSION_ (_SUBVERSION_) on _HOSTNAME_
    add_header spam Flag _YESNOCAPS_
    add_header all Level _STARS(\*)_
    add_header all Status "_YESNO_, score=_SCORE_ required=_REQD_ tests=_TESTS_ autolearn=_AUTOLEARN_ version=_VERSION_"

Other headers options you might find interesting or useful are:

    add_header all DCC _DCCB_: _DCCR_
    add_header all Tests _TESTS_