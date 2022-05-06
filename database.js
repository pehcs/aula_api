import postgres from 'postgres'

const db = postgres({
    host: process.env.HOST,
    port: 5432,
    database: 'seedabit',
    username: "postgres",
    password: ""
})

export default db;