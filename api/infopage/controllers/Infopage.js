'use strict';

/**
 * Infopage.js controller
 *
 * @description: A set of functions called "actions" for managing `Infopage`.
 */

module.exports = {

  /**
   * Retrieve infopage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.infopage.search(ctx.query);
    } else {
      return strapi.services.infopage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a infopage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.infopage.fetch(ctx.params);
  },

  /**
   * Count infopage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.infopage.count(ctx.query);
  },

  /**
   * Create a/an infopage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.infopage.add(ctx.request.body);
  },

  /**
   * Update a/an infopage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.infopage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an infopage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.infopage.remove(ctx.params);
  }
};
