module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'tiny.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db'),
      user: env('DATABASE_USERNAME', 'inpmqkjv'),
      password: env('DATABASE_PASSWORD', 'kR2TG9aBZyRu5zj48LgySTDgKj66zA2L'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
