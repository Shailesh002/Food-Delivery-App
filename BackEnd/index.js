const express = require('express')
const app = express()
const port = 3001

//exported from db which 
const mongoDB = require("./db")
mongoDB();

// Likhna hi pdta h 
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  next();
})

app.use(express.json());

//app.use : A middleware 
// fetches route info from Routes->CreateUser.js then uses User.js from models to create a new user from UserSchema and creates a json of success

app.use('/api', require("./Routes/CreateUser"));  //base URL that is used to group and organize a set of routes related to a specific API or resource
app.use('/api', require("./Routes/Menu"));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server Started on port ${port}`)
})