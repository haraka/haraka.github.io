---
title: "Getting Started"
description: "Getting Started with Haraka"
canonical_url: "https://haraka.github.io/getting_started"
---
# Getting Started

> Getting Started with Haraka

## Haraka

A modern, high performance, flexible SMTP server.

Haraka is an open source SMTP server written in Node.js which provides extremely high performance coupled with a flexible plugin system allowing Javascript programmers full access to change the behaviour of the server. It is used heavily in some high traffic sites - see the [Known Users](https://haraka.github.io/users) page for testimonials.

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="h-10">
<input type="hidden" name="cmd" value="_donations" />


    <input type="hidden" name="business" value="helpme+paypal@gmail.com" />


    <input type="hidden" name="item_name" value="Haraka" />


    <input type="hidden" name="currency_code" value="CAD" />


    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />


    ![](https://www.paypal.com/en_US/i/scr/pixel.gif)

</form>

<div className="flex,space-x-4">

[![Tests](https://github.com/haraka/Haraka/actions/workflows/ci.yml/badge.svg)](https://github.com/haraka/Haraka/actions/workflows/ci.yml)
    [![Coverage Status](https://codecov.io/github/haraka/Haraka/coverage.svg)](https://codecov.io/github/haraka/Haraka?branch=master)

</div>

Haraka is a highly scalable [node.js](http://nodejs.org) email server with a modular
plugin architecture. Haraka can serve thousands of concurrent connections
and deliver thousands of messages per second. Haraka and plugins are written
in asynchronous JS and are very fast.

Haraka has very good spam protection (see [plugins](https://github.com/haraka/Haraka/blob/master/Plugins.md)) and works
well as a filtering [MTA](http://en.wikipedia.org/wiki/Message_transfer_agent). It also works well as a [MSA](http://en.wikipedia.org/wiki/Mail_submission_agent) running on
port 587 with auth and [dkim](https://github.com/haraka/haraka-plugin-dkim) plugins enabled.

Haraka makes no attempt to be a mail store (like Exchange or Postfix/Exim/Qmail),
a [LDA](https://en.wikipedia.org/wiki/Mail_delivery_agent), nor an IMAP server (like Dovecot or Courier). Haraka is
typically used **with** such systems.

Haraka has a scalable outbound mail delivery engine built in. Mail
marked as `relaying` (such as via an `auth` plugin) is automatically
queued for outbound delivery.

### Getting Help

- [Join the mailing list](mailto:haraka-sub@harakamail.com) (implemented as a Haraka plugin)
- [GitHub Issues](https://github.com/haraka/Haraka/issues)

### Screencast

<iframe className="w-full,aspect-video,rounded-md" src="https://www.youtube-nocookie.com/embed/6twKXMAsPsw" title="Haraka screencast" allowFullScreen="true">



</iframe>

### Why Use Haraka?

Haraka's plugin architecture provides an easily extensible MTA that
complements traditional MTAs that excel at managing mail stores but do
not have sufficient filtering.

The plugin system makes it easy to code new features. A typical example
is providing qmail-like extended addresses to an Exchange system,
whereby you could receive mail as `user-anyword@domain.com`, and yet
still have it correctly routed to `user@domain.com`. This is a few lines of
code in Haraka.

Plugins are provided for running mail through [SpamAssassin](https://github.com/haraka/haraka-plugin-spamassassin), validating
[HELO](https://github.com/haraka/haraka-plugin-helo.checks) names, checking [DNS Blocklists](https://github.com/haraka/haraka-plugin-dns-list), and [many others](https://github.com/haraka/Haraka/tree/master/plugins).

### Installing Haraka

Haraka requires [node.js](http://nodejs.org) to run. Install Haraka with [npm](https://www.npmjs.com/package/Haraka):

<code-group>

```bash [npm]
npm install -g Haraka
```

```bash [yarn]
yarn add global Haraka
```

```bash [pnpm]
pnpm add -g Haraka
```

</code-group>

<note>

If the command gives "nobody" errors run the next command

</note>

<code-group>

```bash [npm]
npm -g config set user root
npm install -g Haraka
```

</code-group>

After installation, use the `haraka` binary to set up the service.

### Running Haraka

First, create the service:

```sh
haraka -i /path/to/haraka_test
```

That creates the directory `haraka_test` with `config` and `plugin`
directories within. It also sets the host name used by Haraka
to the output of `hostname`.

If `hostname` is not correct, edit `config/host_list`. For example,
to receive mail addressed to `user@domain.com`, add `domain.com` to the
`config/host_list` file.

Finally, start Haraka using root permissions:

```sh
haraka -c /path/to/haraka_test
```

And it will run.

### Configure Haraka

To choose which plugins run, edit `config/plugins`. Plugins control the
overall behaviour of Haraka. By default, only messages to domains listed
in `config/host_list` will be accepted and then delivered via the
`smtp-forward` plugin. Configure the destination in `config/smtp_forward.ini`.

### Read the Fine Manual

```sh
haraka -h plugins/$name
```

The docs detail how each plugin is configured. After editing
`config/plugins`, restart Haraka and enjoy!

### Running from git

If you are unable to use npm to install Haraka, you can run from git by
following these steps:

First clone the repository:

```sh
git clone https://github.com/haraka/Haraka.git
cd Haraka
```

Install Haraka's node.js dependencies locally:

```sh
npm install
```

Edit `config/plugins` and `config/smtp.ini` to specify the plugins and
config you want.

Finally run Haraka:

```sh
node haraka.js
```

### License and Author

Haraka is MIT licensed - see the [LICENSE](https://github.com/haraka/Haraka/blob/master/LICENSE) file for details.

Haraka is a project started by [Matt Sergeant](https://github.com/baudehlo), a 10 year veteran of the email
and anti-spam world. Previous projects have been the project leader for
SpamAssassin and a hacker on [Qpsmtpd](https://github.com/smtpd/qpsmtpd/).


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
