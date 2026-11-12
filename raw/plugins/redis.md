---
title: "redis - Redis plugin"
description: "Haraka redis plugin - Redis plugin"
canonical_url: "https://haraka.github.io/plugins/redis"
---
# redis - Redis plugin

> Haraka redis plugin - Redis plugin

Connects to a local (by default) redis instance and stores a `redis`
connection handle at `server.notes.redis`.

## Config

The `redis.ini` file has the following sections (defaults shown):

### <span>server</span>

```ini
; host=127.0.0.1
; port=6379
; db=0
```

### <span>pubsub</span>

```ini
; host=127.0.0.1
; port=6379
```

Publish & Subscribe are DB agnostic and thus have no db setting. If host and port and not defined, they default to the same as <span>

server

</span>

 settings.

### <span>opts</span>

```text
; see https://www.npmjs.com/package/redis#overloading
```

## Usage

Use redis in your plugin like so:

```js
if (server.notes.redis) {
    server.notes.redis.hgetall(...);
        // or any other redis command
}
```

## Publish/Subscribe Usage

In your plugin:

```js
exports.results_init = function (next, connection) {
    var plugin = this;
    plugin.redis_subscribe(connection, function () {
        connection.notes.redis.on('pmessage', function (pattern, channel, message) {
            plugin.do_something_with_message(message, ...);
        });
        next();
    });
}
// be nice to redis and disconnect
exports.hook_disconnect = function (next, connection) {
    this.redis_unsubscribe(connection);
}
```


## Sitemap

See the full [sitemap](https://haraka.github.io/sitemap.md) for all pages.
