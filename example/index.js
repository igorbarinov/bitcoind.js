#!/usr/bin/env node

'use strict';

/**
 * bitcoind.js example
 */

process.title = 'bitcoind.js';

/**
 * daemon
 */

var daemon = require('../').daemon({
  directory: process.env.BITCOINDJS_DIR || '~/.bitcoin'
});

daemon.on('error', function(err) {
  daemon.log('error="%s"', err.message);
});

daemon.on('open', function(status) {
  daemon.log('status="%s"', status);
});
