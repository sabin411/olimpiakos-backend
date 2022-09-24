/**
 * video controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::video.video",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { embedId } = ctx.params;
      const entity = await strapi.db.query("api::video.video").findOne({
        where: {
          embedId,
        },
      });

      const sanitizedEntity = await this.sanitizeOutput(entity);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
