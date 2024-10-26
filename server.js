const express = require("express");
const app = express();
const PORT = 3030;

const homeRoute = require("./routes/Home");
const servicesRoute = require("./routes/Services");
const contactRoute = require("./routes/Contact");

const workingTime = (req, res, next) => {
  var hour = new Date().getHours();
  var day = new Date().getDay();

  if (day != 0 && day != 6 && hour >= 9 && hour <= 17) {
    console.log("opened");
    next();
  } else {
    console.log("closed");
    res.send("<h1>closed</h1>");
  }
};

app.use(workingTime);
app.use("/home", homeRoute);
app.use("/services", servicesRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
