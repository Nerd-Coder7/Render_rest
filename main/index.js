const express =require("express");
const app = express();

app.use(express.json());

app.get("/shivam",(req,res)=>{
        res.send("Shivam you are a good boy")
        })

app.get("/ritul",(req,res)=>{
        res.send("Ritul you are a good boy")
        })

app.get("/ankit",(req,res)=>{
        res.send("Ankit you are a bhabhi boy")
        })

app.get("/",(req,res)=>{
        res.send("use Get /shivam,ritul,ankit routes")
        })
app.listen(8080,()=>{
  console.log("Server is listening on 8080")
})
