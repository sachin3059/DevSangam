const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require('./config/database.js');

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("api working")
})

const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/requests.js");
const userRouter = require("./routes/user.js");
const paymentRouter = require("./routes/payment.js");
const chatRouter = require("./routes/chat.js");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", paymentRouter);
app.use("/", chatRouter);



//chat => application
const http = require('http');
const initializeSocket = require("./utils/socket.js");
const server = http.createServer(app);
initializeSocket(server);



connectDB().then( () => {
    console.log("Database connected successfully!");
    server.listen(3000, () => {
        console.log("server is running at port 3000");
    });
}).catch(err => {
    console.error('Database cannot be connected!!');
});





