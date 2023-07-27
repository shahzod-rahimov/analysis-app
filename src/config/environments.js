import 'dotenv/config.js'

export default {
  PORT: process.env.PORT || 5005,
  MONGO_URI: process.env.MONGO_URI,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_TIME: process.env.ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_TIME: process.env.REFRESH_TOKEN_TIME,
  REFRESH_TOKEN_MS: process.env.REFRESH_TOKEN_MS,
  BASE_URL: process.env.BASE_URL,
}
