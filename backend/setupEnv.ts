import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT || 3000,
  dbURL: process.env.DB_URL || 'mongodb://localhost/my-database',
}
