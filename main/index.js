const express =require("express");
const app = express();

app.use(express.json());

app.use("/",(req,res)=>{
  res.send("Iam listening")
})

app.listen(8080,()=>{
  console.log("Server is listening on 8080")
})