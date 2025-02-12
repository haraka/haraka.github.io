---
title: elasticsearch - Logs to Elasticsearch plugin for Haraka
description: Haraka elasticsearch plugin - Logs to Elasticsearch
navigation.title: elasticsearch
---

# haraka-plugin-elasticsearch

Ship Haraka log info directly to Elasticsearch

## INSTALL

```sh
cd /path/to/local/haraka
npm install haraka-plugin-elasticsearch
echo "elasticsearch" >> config/plugins
service haraka restart
```

### Configuration

If the default configuration is not sufficient, copy the config file from the distribution into your haraka config dir and then modify it:

```sh
cp node_modules/haraka-plugin-elasticsearch/config/elasticsearch.ini
config/elasticsearch.ini
$EDITOR config/elasticsearch.ini
```

### Logging

Unless errors are encountered, no logs are emitted.

### Errors

The elasticsearch module has very robust error handling built in. If there's a
connection issue, errors such as these will be emitted when Haraka starts
up:

- Elasticsearch cluster is down!
- No Living connections

However, ES will continue attempting to connect and when the ES server(s) are
available, logging will begin. If errors are encountered trying to save data
to ES, they look like this:

- No Living connections
- Request Timeout after 30000ms

They normally fix themselves when ES resumes working properly.

## Configuration

- host - an IP or hostname of the ES server to connect to

  host=127.0.0.2

- pluginObject

By default, all plugin results are presented as `$plugin_name: { ... }`, at
the top level. If you prefer that all plugin results be nested inside an
object `$obj: { $plugin_name: { ...}`, set pluginObject to that object's key name

    pluginObject=plugin

- [ignore_hosts]

A config file section for hosts whose results should not be stored in
ES. HAproxy servers, Nagios, and other hosts who monitor Haraka can be listed
here. The format for entries is host.name=true

- [index]

  transaction=smtp-transaction
  connection=smtp-connection

Transactions include all the connection information and are "the good stuff."
When a connection has transactions, the connection is not saved separately.
The distinction is that a connection is stored only when it has zero
transactions. The connections index tends to be mostly noise (monitoring,
blocked connections, bruteforce auth attempts, etc.). To collapse them into
the same index, set the value for both identically.

## Index Templates

### Composable Index Templates

Composable templates are the modern (circa 2025) method of creating index templates. In the file ./test/template.js, there are unit tests with working JS code that install the component templates as well as the index template that uses them. If you're standing up a new ES cluster, copy/pasting that into a .js file will get you bootstrapped fairly quickly.

### Legacy Index Template

Creating an index template will apply the template(s) to any future indexes that
match the pattern/name in the template setting. This is how to manually apply
an index map template from the sample file in this package:

```sh
curl -X PUT 'http://localhost:9200/_template/haraka_results' \
     -H 'Content-Type: application/json' -d @templates/index/v8.json
```

<!-- leave these buried at the bottom of the document -->

[ci-img]: https://github.com/haraka/haraka-plugin-elasticsearch/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-plugin-elasticsearch/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-elasticsearch/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-elasticsearch
