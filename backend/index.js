import express from  "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 20, // Maximum number of connections in the pool
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "tests",
    debug: false,
  });
  
  app.get("/",(req,res)=>{
    res.json("hello this is the backend")})
//  Get all posts
app.get("/books", (req, res) => {
 const q = "SELECT * FROM test.posts";
   pool.query(q, (err, data) => {
     if (err) {
       console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  



// Insert a new posts
app.post("/books", (req, res) => {
  const q = "INSERT INTO posts(`title`, `descr`, `user_name`) VALUES (?)";
   const values = [
      
    req.body.title,
    req.body.descr,
   req.body.user_name,

    ];
    pool.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json("Post has been successfully added");
      });
    });
    
  //  Delete a post by ID
 app.delete("/books/:id", (req, res) => {
   const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
  
    pool.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  // Update a post by ID
  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `descr` = ?, `user_name` = ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.descr,
      req.body.user_name,
    ];
  
    pool.query(q, [...values, bookId], (err, data) => {
     if (err) return res.send(err);
      return res.json(data);
    });
  });


app.listen (8800, ()=>{console.log ( "connected to backend")}) 