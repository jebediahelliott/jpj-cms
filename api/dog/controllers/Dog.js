'use strict';

/**
 * Dog.js controller
 *
 * @description: A set of functions called "actions" for managing `Dog`.
 */

module.exports = {

  /**
   * Retrieve dog records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.dog.search(ctx.query);
    } else {
      return strapi.services.dog.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a dog record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dog.fetch(ctx.params);
  },

  /**
   * Count dog records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dog.count(ctx.query);
  },

  /**
   * Create a/an dog record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dog.add(ctx.request.body);
  },

  /**
   * Update a/an dog record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dog.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dog record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dog.remove(ctx.params);
  }
};
