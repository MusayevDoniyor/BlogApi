const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("../routes/user.routes");
const postRoutes = require("../routes/post.routes");
const errorhandler = require("./errorHandler");

app.get("/", (req, res) => {
  res.status(200).send(`
    <div><a href="/users">Go to users route</a></div>
    <div><a href="/posts">Go to posts route</a></div>
    `);
});

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use(errorhandler);

module.exports = app;
