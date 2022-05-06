import express from 'express'
import cors from 'cors'
import db from './database.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/membros", async (req, res)=>{
    const findMembers = await db`SELECT * FROM members`
    return res.json(findMembers)
})

app.post("/membros", async (req, res)=>{
    try{
        const { firstname, lastname, roles } = req.body
        const member = { firstname, lastname, roles}
        const saveMember = await db`
            INSERT INTO members 
                ${db(member,
                        'firstname',
                        'lastname',
                        'roles')}
        ` 
        return res.status(201).json(saveMember)
    }catch(e){
        return res.status(400).end()
    }
})

app.delete("/membros/:id", async (req, res)=>{
    const { id } = req.params
    const deleteById = await db`
        DELETE FROM members
        WHERE id=${id}
    `
    return res.status(204).json(deleteById)
})



app.listen(PORT, ()=> console.log("Servidor rodando na porta 3000"))