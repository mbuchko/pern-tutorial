import { sql } from "../config/db.js";

const DEFAULT_USERS = [
  {
    name: "admin",
    surname: "admin",
    email: "admin@example.com",
    password: "admin"
  }
]

async function seedDatabase() {
  try {
    // first, clear existing data    
    //await sql`TRUNCATE TABLE users RESTART IDENTITY`;
    
    await sql`CREATE TABLE IF NOT EXISTS users(
        uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `
        
        // insert all users
        
        for (const user of DEFAULT_USERS) {
            await sql`
            INSERT INTO users (name, surname, password, email)
            VALUES (${user.name}, ${user.surname}, ${user.password}, ${user.email})
            `;
        }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding users table:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();