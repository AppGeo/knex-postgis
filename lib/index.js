'use strict';

module.exports = function (knex) {
  var methods = ['my', 'method', 'names'];

  // TODO
  // extend knex.client.QueryBuilder.prototype with methods

  // make available on knex.[method]()
  methods.forEach(function(method) {
    knex[method] = function() {
      var client = knex();
      return knex[method].apply(client, arguments);
    };
  });
};
