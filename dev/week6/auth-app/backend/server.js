const express = require("express");
const jwt = require("jsonwebtoken");
const secret = "1234567890"

const app = express();
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  resizeBy.json({
    msg: "server running",
  });
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  userExist = users.find((u) => u.username === username);

  if (userExist) {
    res.status(401).send({
      msg: "user already exists",
    });
    return;
  } else {
    try {
      users.push({
        username: username,
        password: password,
      })
      
      res.json({
        msg: "user added"
      });
      console.log(users);
    } catch (error) {
        res.status(401).send({
            msg : error
        })
    }
  }
});

app.post("/signin",(req,res)=>{
    const {username,password} = req.body;

    const user = users.find(u=>u.username === username && u.password === password)
    if(!user){
        res.status(404).send({
            msg: "user not found"
        })
        return;
    }
    const token = jwt.sign(username,secret)
    user.token = token
    res.json({
        msg: "user signed in",
        token : token
    })
    console.log(users);
    
} )


app.listen(3000, () => {
  console.log("server running on 3000");
});
