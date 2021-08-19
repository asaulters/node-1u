const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorControler = require("./controllers/error");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     defaultLayout: "main-layout", ->> Handlebars
//     layoutsDir: "views/layouts/",
//     extname: "hbs",
//   })
// );

app.set("view engine", "ejs"); //can change second param to "pug", hbs,  etc depending on what your using
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControler.get404);

app.listen(3000);
