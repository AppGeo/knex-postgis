'use strict';

module.exports = function (knex) {
  var methods = ['geometry'];

  knex.client.QueryBuilder.prototype.geometry = function (operation) {
    return this;
  };

  // make available on knex.[method]()
  methods.forEach(function(method) {
    knex[method] = function() {
      return knex[method].apply(knex, arguments);
    };
  });
};
