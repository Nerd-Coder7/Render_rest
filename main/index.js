const express =require("express");
const app = express();

app.use(express.json());

app.use("/",(req,res)=>{
  res.send("Iam listening")
})
app.get("/shivam",(req,res)=>{
        res.send("Shivam you are a good boy")
        })
app.listen(8080,()=>{
  console.log("Server is listening on 8080")
})
