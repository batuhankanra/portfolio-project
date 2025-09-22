import dotenv from "dotenv"


dotenv.config()

export const config ={
    "PORT":process.env.PORT,
    "NODE_ENV":process.env.NODE_ENV==='production',
    "DB_USER":process.env.DB_USER,
    "DB_NAME":process.env.DB_NAME,
    "DB_HOST":process.env.DB_HOST,
    "DB_PASSWORD":process.env.DB_PASSWORD,
    "DB_PORT":process.env.DB_PORT,
    "JWT_SECRET":process.env.JWT_SECRET,
    "JWT_EXPIRES_IN":process.env.JWT_EXPIRES_IN || "1h"
}