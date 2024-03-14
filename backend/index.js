import express from "express";
import mysql from "mysql2";
//import cors from "cors";

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "test",
    debug: false, // Set to true for debugging
  });
  
  app.get("/",(req,res)=>{
    res.json("hello this is the backend")})
// Example: Get all books
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    pool.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
// Example: Insert a new book
app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `descr`, `cover`, `user_name`) VALUES (?)";
    const values = [
       "title from backend ",
      "descr from backend",
      "user_email from backend",
      "cover  from backend",
    ];
    pool.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json("Post has been successfully added");
      });
    });
    
  


app.listen (8800, ()=>{console.log ( "connected to backend")})