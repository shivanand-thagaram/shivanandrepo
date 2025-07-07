import * as dotenv from "dotenv";
dotenv.config();
console.log("DB URL:", process.env.DATABASE_URL);

export default {
  schema: "../drizzle/schema.ts",      
  out: "../drizzle/migrations",        
  dialect: "postgresql",                
 dbCredentials: {
    url: process.env.DATABASE_URL!, 
  },
};

