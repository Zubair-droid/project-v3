const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const passport = require("passport");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){
  res.render("home");
});





  app.get("/login", function(req, res){
    res.render("login");
  });
  
  app.get("/signup", function(req, res){
    res.render("signup");
  });
  
  
  app.post("/signup", function(req,res){
   
   res.redirect("/login");
  })
  
  app.get("/signup", function(req, res){
    if (req.isAuthenticated()){
      res.render("submit");
    } else {
      res.redirect("/login");
    }
  });

 
app.get(function(req,res){
   res.render(__dirname + "index.html")
});



  

  app.post("/submit", function(req, res){
    const submittedSecret = req.body.secret;
  
  app.get("/submit", function(req, res){
    if (req.isAuthenticated()){
      res.render("submit");
    } else {
      res.redirect("/");
    }
  })})
  
  






app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

app.get("/signup", function(req, res){

  res.render(__dirname , "/index.html")

});

app.post("/login", function(req, res){

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/home");
      });
    }
  });

});










let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
  console.log("Server started successfully");
})
