// path: ./config/env/production/database.ts

// parse pg-connection-string
const pg = require("pg-connection-string");
const config = pg.parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
