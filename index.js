const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=5000;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("i am bharath")
})

app.post("/newdata",(req,res)=>{
	//console.log(req.body)
	const {name,age,select,email,gender}=req.body
	console.log(name,age,select,email,gender,"values")
})

app.listen(port,()=>console.log("server is in 5000 port"))




