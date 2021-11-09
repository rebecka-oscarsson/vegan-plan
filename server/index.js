// npm run dedStart

const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const MemberModel = require("./models/Members");
const signupTemplateCopy = require("./models/SignupModels"); //hämta schema
const cors = require("cors");
//const routesUrls = require("./routes/routes");

app.use(express.json()); // allow us to resive info from frontend in json format
app.use(cors());

mongoose.connect(
  "mongodb+srv://vegan:vegan123@cluster0.ekwli.mongodb.net/signupTemplate?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.post("/signup", async (req, res) => {
  const newUser = new signupTemplateCopy({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.send("insert data");
  } catch (error) {
    console.log(error);
  }
});

//app.use("/app", routesUrls);


app.listen(3002, () => {
  console.log("server running on 3002");
});
