const oussema = require("../model/user");
var jwt = require("jsonwebtoken");
var bc = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");

exports.signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const exiestingUser = await oussema.findOne({ email });
    if (exiestingUser) {
      res.status(401).json({ msg: "user is already exist" });
    }
    const newUser = new oussema({ fullName, email, password });

    const salt = await bc.genSalt(10);
    const hash = await bc.hashSync(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
    };
    const token = jwt.sign(payload, secret);

    res.status(200).send({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        password: newUser.password,
        fullName: newUser.fullName,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const theUser = await oussema.findOne({ email });
    if (!theUser) {
      res.status(402).json({ msg: "invalid email or password" });
    }
    const isMatch = await bc.compare(password, theUser.password);
    if (!isMatch) {
      res.status(402).json({ msg: "invalid email or password" });
    }
    const payload = {
      id: theUser._id,
      email: theUser.email,
      fullName: theUser,
    };
    const token = jwt.sign(payload, secret);
    res.status(202).json({
      token,
      user: {
        id: theUser._id,
        email: theUser.email,
        password: theUser.password,
        fullName: theUser.fullName,
      },
    });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


exports.getUser=(req,res)=>{
  res.send(req.user)
}
