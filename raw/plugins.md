---
title: "Plugins"
description: "Plugins is a collection of plugins for Haraka that extend its functionality."
canonical_url: "https://haraka.github.io/plugins"
---
# Plugins

> Plugins is a collection of plugins for Haraka that extend its functionality.

To create your own plugin, see [Write a Plugin](https://github.com/haraka/Haraka/wiki/Write-a-Plugin).

## Installing NPM packaged plugins

Plugins can be installed in the directory where Haraka was installed (where depends on your OS platform and whether you specified `-g`) or the Haraka install directory (haraka -i this_path). This example installs *my-great-plugin* in the Haraka install directory:

```text
cd /etc/haraka
npm install haraka-plugin-my-great-plugin
```

NPM then installs the plugin and its dependencies in a `node_modules` directory within the Haraka install directory.

## Plugin Registry

A comprehensive list of known plugins. Create a PR to add yours to these lists.

### Auth Plugins

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="https://github.com/AuspeXeu/haraka-plugin-auth-enc-file" rel="nofollow">
        auth-enc-file
      </a>
    </td>
    
    <td>
      Auth against user/pass in an encrypted file
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/auth/flat_file.md" rel="nofollow">
        flat_file
      </a>
    </td>
    
    <td>
      Auth against user/pass in a file
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/auth/auth_bridge.md" rel="nofollow">
        auth_bridge
      </a>
    </td>
    
    <td>
      Auth against remote MTA
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-auth-imap" rel="nofollow">
        auth-imap
      </a>
    </td>
    
    <td>
      Auth against IMAP server
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-auth-ldap" rel="nofollow">
        auth_ldap
      </a>
    </td>
    
    <td>
      Auth against LDAP
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/auth/auth_proxy.md" rel="nofollow">
        auth_proxy
      </a>
    </td>
    
    <td>
      Auth against remote MTA
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/auth/auth_vpopmaild.md" rel="nofollow">
        auth_vpopmaild
      </a>
    </td>
    
    <td>
      Auth against vpopmaild
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-dkim" rel="nofollow">
        dkim
      </a>
    </td>
    
    <td>
      DKIM sign & verify
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-dovecot" rel="nofollow">
        dovecot
      </a>
    </td>
    
    <td>
      SMTP AUTH & recipient validation against dovecot
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-ldap" rel="nofollow">
        LDAP
      </a>
    </td>
    
    <td>
      Aliases, Auth, and Recipient validation from LDAP
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://www.npmjs.com/package/haraka-plugin-mailauth" rel="nofollow">
        mailauth
      </a>
    </td>
    
    <td>
      Email Auth (SPF, DKIM, DMARC, ARC, & BIMI)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://www.npmjs.com/package/haraka-plugin-opendkim" rel="nofollow">
        opendkim
      </a>
    </td>
    
    <td>
      DKIM sign and verify email messages
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-spf" rel="nofollow">
        spf
      </a>
    </td>
    
    <td>
      Perform SPF checks
    </td>
  </tr>
</tbody>
</table>

### Queue Plugins

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/discard.md" rel="nofollow">
        discard
      </a>
    </td>
    
    <td>
      queues messages to /dev/null
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/benjamonnguyen/haraka-plugin-queue-kafka" rel="nofollow">
        kafka
      </a>
    </td>
    
    <td>
      Queue inbound mail to a Kafka topic
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/lmtp.md" rel="nofollow">
        lmtp
      </a>
    </td>
    
    <td>
      deliver queued messages via LMTP
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/Helpmonks/haraka-plugin-mongodb" rel="nofollow">
        mongodb
      </a>
    </td>
    
    <td>
      Queue emails to MongoDB
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/qmail-queue.md" rel="nofollow">
        qmail-queue
      </a>
    </td>
    
    <td>
      queue to qmail
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/quarantine.md" rel="nofollow">
        quarantine
      </a>
    </td>
    
    <td>
      queue to a quarantine directory
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-queue-rabbitmq" rel="nofollow">
        rabbitmq
      </a>
    </td>
    
    <td>
      queue to RabbitMQ
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/mailprotector/haraka-plugin-queue-rails" rel="nofollow">
        rails
      </a>
    </td>
    
    <td>
      queue messages to a Rails app using <a href="https://guides.rubyonrails.org/action_mailbox_basics.html" rel="nofollow">
        Action Mailbox
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/smtp_bridge.md" rel="nofollow">
        smtp_bridge
      </a>
    </td>
    
    <td>
      Bridge SMTP sessions to another MTA
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/smtp_forward.md" rel="nofollow">
        smtp_forward
      </a>
    </td>
    
    <td>
      Forward emails to another MTA
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/queue/smtp_proxy.md" rel="nofollow">
        smtp_proxy
      </a>
    </td>
    
    <td>
      Proxy SMTP connections to another MTA
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/nodemailer/haraka-plugin-wildduck" rel="nofollow">
        wildduck
      </a>
    </td>
    
    <td>
      queue messages to Wild Duck
    </td>
  </tr>
</tbody>
</table>

### Filtering Plugins

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-attachment" rel="nofollow">
        attachment
      </a>
    </td>
    
    <td>
      Restrict attachment types
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-avg" rel="nofollow">
        avg
      </a>
    </td>
    
    <td>
      AVG antivirus scanner
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-clamd" rel="nofollow">
        clamd
      </a>
    </td>
    
    <td>
      Anti-Virus scanning with ClamAV
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/data.signatures.md" rel="nofollow">
        data.signatures
      </a>
    </td>
    
    <td>
      Block emails whose bodies match signatures
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-dcc" rel="nofollow">
        dcc
      </a>
    </td>
    
    <td>
      Distributed Checksum Clearinghouse
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-esets" rel="nofollow">
        esets
      </a>
    </td>
    
    <td>
      Virus scanning with ESET Mail Security
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-messagesniffer" rel="nofollow">
        messagesniffer
      </a>
    </td>
    
    <td>
      Anti-spam via <a href="http://www.armresearch.com/Products/" rel="nofollow">
        MessageSniffer
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-milter" rel="nofollow">
        milter
      </a>
    </td>
    
    <td>
      milter support
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-rspamd" rel="nofollow">
        rspamd
      </a>
    </td>
    
    <td>
      Scan emails with rspamd
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-spamassassin" rel="nofollow">
        spamassassin
      </a>
    </td>
    
    <td>
      Scan emails with SpamAssassin
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-uribl" rel="nofollow">
        uribl
      </a>
    </td>
    
    <td>
      Block based on URI blacklists
    </td>
  </tr>
</tbody>
</table>

### Every other Plugin

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-access" rel="nofollow">
        access
      </a>
    </td>
    
    <td>
      ACLs based on IPs, domains, email addrs, etc.
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/acharkizakaria/haraka-plugin-accounting-files/blob/master/README.md" rel="nofollow">
        accounting_files
      </a>
    </td>
    
    <td>
      Retrieve, Store and Archive custom information of outbound traffic
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/aliases.md" rel="nofollow">
        aliases
      </a>
    </td>
    
    <td>
      Email aliases
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-asn" rel="nofollow">
        ASN
      </a>
    </td>
    
    <td>
      Get ASN info for remote senders
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/block_me.md" rel="nofollow">
        block_me
      </a>
    </td>
    
    <td>
      Populate block list via forwarded emails
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://www.npmjs.com/package/haraka-plugin-bounce" rel="nofollow">
        bounce
      </a>
    </td>
    
    <td>
      Many options for bounce processing
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/delay_deny.md" rel="nofollow">
        delay_deny
      </a>
    </td>
    
    <td>
      Delays all pre-DATA 'deny' results
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-dns-list" rel="nofollow">
        dns-list
      </a>
    </td>
    
    <td>
      Check remote MTAs against DNS black, white, and karma lists
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-dovecot" rel="nofollow">
        dovecot
      </a>
    </td>
    
    <td>
      Recipient validation & SMTP AUTH against dovecot
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-early_talker" rel="nofollow">
        early_talker
      </a>
    </td>
    
    <td>
      Reject remotes that talk early
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-fcrdns" rel="nofollow">
        fcrdns
      </a>
    </td>
    
    <td>
      Forward Confirmed reverse DNS
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-geoip" rel="nofollow">
        geoip
      </a>
    </td>
    
    <td>
      get geographic information about mail senders
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-greylist" rel="nofollow">
        greylist
      </a>
    </td>
    
    <td>
      Greylisting
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-headers" rel="nofollow">
        headers
      </a>
    </td>
    
    <td>
      Inspect and verify various email headers
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-helo.checks" rel="nofollow">
        helo.checks
      </a>
    </td>
    
    <td>
      Validity checks of the HELO string
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-karma" rel="nofollow">
        karma
      </a>
    </td>
    
    <td>
      Dynamic scoring of incoming connections
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-known-senders" rel="nofollow">
        known-senders
      </a>
    </td>
    
    <td>
      Reward emails from those you send mail to
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-ldap" rel="nofollow">
        LDAP
      </a>
    </td>
    
    <td>
      Aliases, Auth, and Recipient validation from LDAP
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-limit" rel="nofollow">
        Limit
      </a>
    </td>
    
    <td>
      Apply many types of limits to SMTP connections
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-elasticsearch/" rel="nofollow">
        elasticsearch
      </a>
    </td>
    
    <td>
      Store message metadata in Elasticsearch
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-log-reader" rel="nofollow">
        log reader
      </a>
    </td>
    
    <td>
      extract log entries from the haraka log file
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-syslog" rel="nofollow">
        syslog
      </a>
    </td>
    
    <td>
      Log to syslog
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-mail_from.is_resolvable" rel="nofollow">
        mail_from.is_resolvable
      </a>
    </td>
    
    <td>
      Verifies the MAIL FROM domain resolves to a MX
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/mr-karan/haraka-plugin-outbound-logger" rel="nofollow">
        outbound-logger
      </a>
    </td>
    
    <td>
      JSON logging of outbound email traffic. Logs useful metadata about delivered/bounced emails
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-p0f" rel="nofollow">
        p0f
      </a>
    </td>
    
    <td>
      TCP Fingerprinting
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/prevent_credential_leaks.md" rel="nofollow">
        prevent_credential_leaks
      </a>
    </td>
    
    <td>
      Prevent users from emailing their credentials
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/process_title.md" rel="nofollow">
        process_title
      </a>
    </td>
    
    <td>
      Populate <code>
        ps
      </code>
      
       output with activity counters
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-recipient-routes" rel="nofollow">
        recipient-routes
      </a>
    </td>
    
    <td>
      Route emails based on their recipient(s)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-redis" rel="nofollow">
        redis
      </a>
    </td>
    
    <td>
      multi-purpose Redis db connection(s)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/rcpt_to.in_host_list.md" rel="nofollow">
        rcpt_to.in_host_list
      </a>
    </td>
    
    <td>
      Define local email domains in a file
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-rcpt-ldap" rel="nofollow">
        rcpt_to.ldap
      </a>
    </td>
    
    <td>
      Validate recipients against LDAP
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-rcpt-postgresql" rel="nofollow">
        rcpt-postgresql
      </a>
    </td>
    
    <td>
      validate recipients against PostgreSQL
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-qmail-deliverable" rel="nofollow">
        qmail-deliverable
      </a>
    </td>
    
    <td>
      Validate recipients against Qmail-Deliverable
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/record_envelope_addresses.md" rel="nofollow">
        record_envelope_addresses
      </a>
    </td>
    
    <td>
      Adds message headers with ENV recips
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-relay" rel="nofollow">
        relay
      </a>
    </td>
    
    <td>
      Manage relay permissions
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/reseed_rng.md" rel="nofollow">
        reseed_rng
      </a>
    </td>
    
    <td>
      Reseed the RNG
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://www.npmjs.com/package/haraka-plugin-batv" rel="nofollow">
        batv-srs
      </a>
    </td>
    
    <td>
      BATV & SRS
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/swerter/haraka-plugins/blob/master/plugins/srs.js" rel="nofollow">
        srs
      </a>
    </td>
    
    <td>
      Sender Rewriting Scheme
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/tarpit.md" rel="nofollow">
        tarpit
      </a>
    </td>
    
    <td>
      Slow down connections
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/tls.md" rel="nofollow">
        tls
      </a>
    </td>
    
    <td>
      Implements TLS
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/toobusy.md" rel="nofollow">
        toobusy
      </a>
    </td>
    
    <td>
      Defers connections when too busy
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-vmta/blob/master/README.md" rel="nofollow">
        vmta
      </a>
    </td>
    
    <td>
      Virtual MTA management
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/haraka-plugin-watch" rel="nofollow">
        watch
      </a>
    </td>
    
    <td>
      Watch live SMTP traffic in a web interface
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/nodemailer/haraka-plugin-wildduck" rel="nofollow">
        wildduck
      </a>
    </td>
    
    <td>
      provides recipient checks against Wild Duck
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/haraka/Haraka/blob/master/docs/plugins/xclient.md" rel="nofollow">
        xclient
      </a>
    </td>
    
    <td>
      Implements XCLIENT
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://github.com/AprilGrimoire/haraka-plugin-save-sent" rel="nofollow">
        save-sent
      </a>
    </td>
    
    <td>
      Save sent emails on the serverside to a mailbox of the sender
    </td>
  </tr>
</tbody>
</table>


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
