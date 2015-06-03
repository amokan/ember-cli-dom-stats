# ember-cli-dom-stats

[![npm version](https://badge.fury.io/js/ember-cli-dom-stats.svg)](http://badge.fury.io/js/ember-cli-dom-stats) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-dom-stats.svg)](http://emberobserver.com/addons/ember-cli-dom-stats)
  
  
A quick hack to display the total DOM element count and the delta in a small window similar to (_and totally based on_) [ember-browsery-stats](https://github.com/stefanpenner/ember-browsery-stats) and [paulirish's memory-stats.js](https://github.com/paulirish/memory-stats.js)

I highly recommend you use __ember-browsery-stats__ with this, since I coded the litle stats box to sit to the left of browsery-stats.

![image](http://i.imgur.com/vBoVfHQ.gif)

## Demo

You can find a very crude demo at [http://ember-cli-dom-stats-demo.divshot.io/](http://ember-cli-dom-stats-demo.divshot.io/)

_The DOM count is displayed on the bottom right of the browser_

## Installation

* `ember install ember-cli-dom-stats`
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
