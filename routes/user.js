const express=require("express");
const { signUp } = require("../controllers/user.controllers");
const { SignUpRules,validator } = require("../middleware/validator");


router=express.Router()


router.post("/signUp",SignUpRules(),validator,signUp)


module.exports=router