# ember-cli-dom-stats

A quick hack to get the total DOM element count in a small window similar to (_and totally based on_) [ember-browsery-stats](https://github.com/stefanpenner/ember-browsery-stats) and [paulirish's memory-stats.js](https://github.com/paulirish/memory-stats.js)

I highly recommend you use __ember-browsery-stats__ with this, since I coded the litle stats box to sit to the left of browsery-stats.

## Installation

* `ember install:addon ember-cli-dom-stats`
* To conditionally enable this addon only while in development:

```javascript
// Brocfile.js
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  domStats: EmberApp.env() === 'development'
});

module.exports = app;
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
