const config = require('config');

const getConfig = key => {
  // Heroku store config variables as environment variables
  return process.env.NODE_ENV === 'production'
    ? process.env[key]
    : config.get(key);
};

module.exports = getConfig;
