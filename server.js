const express=require("express");
const app=express();
const connectDb=require("./config/connectDb")
connectDb()
const user=require("./routes/user")
app.use(express.json())
app.use("/user",user)

const PORT=process.env.PORT||4000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is runing on PORT ${PORT}`))