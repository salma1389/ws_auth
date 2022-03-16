const express=require("express");
const { signUp, login, getUser } = require("../controllers/user.controllers");
const auth = require("../middleware/auth");
const { SignUpRules,validator } = require("../middleware/validator");


router=express.Router()


router.post("/signUp",SignUpRules(),validator,signUp);
router.post("/login",login);
router.get("/profil",auth,getUser)


module.exports=router