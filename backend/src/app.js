const express = require("express");
const connectDB = require('./config/database.js');
const User = require("./models/userModel");
const app = express();

// inbuit middleware 
app.use(express.json());

app.post('/signup', async (req, res) => {
    // creating a new instance of the user model
    const user = new User(req.body);

    try {
        await user.save();
        res.send("User Added successfully !");  
    } catch (error) {
        res.status(400).send('Error saving the user: ' + error.message);
    }
});


connectDB().then( () => {
    console.log("Database connected successfully!");
    app.listen(3000, () => {
        console.log("server is running at port 3000");
    });
}).catch(err => {
    console.error('Database cannot be connected!!');
});





