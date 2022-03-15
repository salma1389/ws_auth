const { check, validationResult } = require("express-validator");

exports.SignUpRules = () => [
  check("fullName", " this field is required").notEmpty(),
  check("email", " this field is required").notEmpty(),

  check("email", " shuld be a valid email ").isEmail(),
  check("password", " password shuld be at least 5 degets").isLength({min:5}),
];


exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    return errors.isEmpty()?next():res.status(400).send({errors:errors.array()})
}