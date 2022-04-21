const express = require("express");
const Contactroutes = require("./Contactroutes");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
try {
  console.log("app started");
  app.use("/", Contactroutes);
} catch (err) {
  console.log(err);
}

app.listen(5000);
