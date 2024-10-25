const express = require("express");
const app = express();
const PORT = 3030;

const homeRoute = require("./routes/Home");
const servicesRoute = require("./routes/Services");
const contactRoute = require("./routes/Contact");

app.use("/home", homeRoute);
app.use("/services", servicesRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
