"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseHost = process.env.DATABASE_HOST || "localhost";
const databasePort = process.env.DATABASE_PORT || 5432;
const databaseName = process.env.DATABASE_NAME || "sabinshrestha";
const databaseUser = process.env.DATABASE_USER || "postgres";
const databasePassword = process.env.DATABASE_PASSWORD || "password";
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", databaseHost),
            port: env.int("DATABASE_PORT", databasePort),
            database: env("DATABASE_NAME", databaseName),
            user: env("DATABASE_USERNAME", databaseUser),
            password: env("DATABASE_PASSWORD", databasePassword),
            ssl: env.bool("DATABASE_SSL", false),
        },
    },
});
