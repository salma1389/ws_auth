const oussema = require("../model/user");
const jwt=require("jsonwebtoken")
const config=require("config");
const secret=config.get("secret")

const auth=async(req,res,next)=>{
    const token=req.headers.authorization;
    try {
        const decoded=jwt.verify(token,secret)
        const user=await oussema.findById(decoded.id)
        if(!user){
            res.status(404).json({msg:"not authorized"})
        }else{
            req.user=user
            next()
        }
    } catch (error) {
        res.status(503).json({msg:error.message})
    }
}
module.exports=auth