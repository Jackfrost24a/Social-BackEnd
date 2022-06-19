const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes-legacy/users");
const authRoute = require("./routes-legacy/auth");
const postRoute = require("./routes-legacy/posts");
const { db } = require("./database");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const routerAPI = require("./routers");

dotenv.config();

// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
//     console.log("connected to MONGO")
// })

//middleware
app.use(cors());
app.use(express.json());
app.use(bearerToken());
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("common"));

app.use("/user", routerAPI.userRouters);
app.use("/admin", routerAPI.adminRouters);

app.listen(5500, () => {
  console.log("backend server up");
});
