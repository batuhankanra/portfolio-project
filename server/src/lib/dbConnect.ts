import { Pool } from "pg";
import { config } from "../config";


const pool = new Pool({
    user:config.DB_USER,
    host:config.DB_HOST,
    database:config.DB_NAME,
    password:config.DB_PASSWORD,
    port:Number(config.DB_PORT)
})
pool.connect().then(()=>console.log("connected to the database ")).catch((err)=>console.log("database error:",err))
export default pool