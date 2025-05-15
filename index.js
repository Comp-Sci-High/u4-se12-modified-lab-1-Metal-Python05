// Step 1: Create a "public" folder

// Step 2: In this folder move your static files like HTML, CSS, and JavaScript. (Not your index.js, this is server side js!)

const express = require("express")
const { request } = require("node:http")
const app = express()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})



// Step 3: Serve Static Files w/ middleware
// Remeber to use the variable __dirname
app.use(express.static(__dirname+"/public"))



// Step 4: Create a route handler for the home route
// Once inside send the file index.html
app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/public/index.html")
});



app.listen(3000, () => {
  console.log("Server is serving")
})
