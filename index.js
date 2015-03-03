/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-dom-stats',

  isEnabled: function() {
    var options = this.app.options.domStats;
    return typeof options === 'undefined' || !!options;
  },

  included: function included(app) {
    this._super.included(app);
  }
};
