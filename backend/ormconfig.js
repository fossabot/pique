const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

const path = require('path');

module.exports = {
  type: 'better-sqlite3',
  database: 'data/database.sqlite',
  migrations: ['src/database/migrations/**/*.ts'],
  seeds: ['src/database/seeds/**/*.ts'],
  factories: ['src/database/factories/**/*.ts'],
  entities: ['src/**/*entity.ts'],
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
