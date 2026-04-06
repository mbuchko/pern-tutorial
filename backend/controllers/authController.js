import bcrypt from "bcryptjs"
import { sql } from "../config/db"

const register = async (req, res) => {
    const { name, surname, email, password } = req.body

    const userExists = await sql`
        SELECT email FROM users
        WHERE email = ${email};
    `

    if(userExists) {
        return res.status(400).json("Euser already exists with this email")
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash( password, salt )

    // Create user

}