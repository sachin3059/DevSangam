const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require('./config/database.js');

const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/requests.js");
const userRouter = require("./routes/user.js");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);


connectDB().then( () => {
    console.log("Database connected successfully!");
    app.listen(3000, () => {
        console.log("server is running at port 3000");
    });
}).catch(err => {
    console.error('Database cannot be connected!!');
});





