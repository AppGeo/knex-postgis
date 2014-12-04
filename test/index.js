'use strict';

var test = require('tape');
var knex = require('knex');
var lib = require('../lib');
var db = knex({ client: 'postgres' });

test('has geometry', function (t) {
  lib(db);

  t.equal(typeof db.geometry, 'function', 'geometry present as function');
  t.end();
});
