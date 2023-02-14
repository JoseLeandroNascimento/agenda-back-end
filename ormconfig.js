
module.exports = {
    type: 'mysql',
    host: 'agenda_db_container',
    port: 3306,
    username: 'root',
    password: '',
    database: 'agenda',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
  