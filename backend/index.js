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

app.listen (8800, ()=>{console.log ( "connected to backend")})