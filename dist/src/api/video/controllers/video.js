"use strict";
/**
 * video controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::video.video", ({ strapi }) => ({
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
}));
