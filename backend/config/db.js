import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
//import pg from "pg"

dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env

// const { Pool, Client } = pg

// # PGUSER='postgres'
// # PGPASSWORD='mysecretpassword'
// # PGHOST='some-postgres'
// # PGDATABASE='postgres'
// # PGPORT=5432

// export const pool = new Pool({
//   user: 'postgres',
//   password: 'mysecretpassword',
//   host: 'localhost',
//   port: 5433,
//   database: 'postgres'
// })
 
// console.log(await pool.query('SELECT NOW()'))
 
// export const sql = new Client({
//   user: 'postgres',
//   password: 'mysecretpassword',
//   host: 'localhost',
//   port: 5433,
//   database: 'postgres'
// })



export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)