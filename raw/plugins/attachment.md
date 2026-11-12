---
title: "attachment - Attachment plugin for Haraka"
description: "Haraka attachment plugin - attachment handling for Haraka"
canonical_url: "https://haraka.github.io/plugins/attachment"
---
# attachment - Attachment plugin for Haraka

> Haraka attachment plugin - attachment handling for Haraka

This plugin allows you to reject messages based on Content-Type within
the message or any MIME parts or on the filename of any attachments.

## Limitations

This plugin cannot detect forged MIME types where the sender is lying
about the type.  The type is not confirmed in any way currently.

## Requirements

To be able to check filenames inside archive files the npm module
`tmp` is required and the `bsdtar` binary must be available (in
/bin /usr/bin or /usr/local/bin).

If either `tmp` or `bsdtar` are unavailable then the plugin will
automatically disable expansion of archive files.

## Logging

At INFO level logging this plugin will output the filename and type
of each attached file along with an MD5 checksum of the contents.
The MD5 checksum is useful to check against [www.virustotal.com](http://www.virustotal.com)

## Configuration

- attachment.ini
  - archive_max_depth
  (default: 5)<br />
  
  The maximum level of nested archives that will be unpacked.
  If this is exceeded the message will be rejected.
  - archive_extns
  (default: .zip,.tar,.tgz,.taz,.z,.gz,.rar,.7z)<br />
  
  File extensions that should be treated as archives.
  This can be any file type supported by bsdtar.
  - allow_encrypted_archives
  (default: false)<br />
  
  Allow archives that cannot be read by bsdtar because
  they are encrypted.
  - timeout
  (default: 30)<br />
  
  Timeout in seconds before the plugin will abort.
- attachment.filename.regex<br />

This file contains a list of regular expressions, one per line that
will be tested against each filename found within a message.
The first regexp to match will cause the message to be rejected.<br />


Any invalid regexps will be detected, reported and skipped.
- attachment.filename.wc<br />

As above, except this expects wildcards instead of regular expressions.
- attachment.archive.filename.regex<br />

This file contains a list of regular expressions, one per line that
will be tested against each filename found within an archive file.
The first regexp to match will cause the message to be rejected.
Any invalid regexps will be detected, reported and skipped.
- attachment.archive.filename.wc<br />

As above, except this expects wildcards instead of regular expressions.
- attachment.ctype.regex<br />

This file contains a list of regular expressions, one per line that
will be tested against each MIME Content-Type header in the message.
The first regexp to match will cause the message to be rejected.
Any invalid regexps will be detected, reported and skipped.
- attachiment.ctype.wc<br />

As above, except this expects wildcards instead of regular expressions.


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
