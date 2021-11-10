const express = require("express");
const router = express.Router();
const signupTemplateCopy = require("../models/SignupModels"); //hämta schema

router.post("/signup", (req, res) => {
  const newUser = new signupTemplateCopy({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: email.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
// // /app/login
// router.get("/login", (req, res) => {
//   let result = 
// })


module.exports = router;
