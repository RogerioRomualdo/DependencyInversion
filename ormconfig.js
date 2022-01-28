require("dotenv").config();

const srcConfig = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ["./src/abstractions/models/*.ts"],
};

const distConfig = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ["./dist/abstractions/models/*{.ts,.js}"],
  migrations: ["./dist/abstractions/migrations/*{.ts,.js}"],
  cli: {
    migrationsDir: "src/abstractions/migrations",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? srcConfig : distConfig;
