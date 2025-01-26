const express = require("express");
const bcrypt = require("bcrypt");
const validator = require("validator");
const connectDB = require('./config/database.js');
const User = require("./models/userModel");
const app = express();

// inbuit middleware 
app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        // first validate data
        if(!firstName || !lastName){
            throw new Error('Name is not valid');
        }
        else if(!validator.isEmail(email)){
            throw new Error('email is not valid');
        }
        else if(!validator.isStrongPassword(password)){
            throw new Error('your password is not strong');
        }

        // encrypting password using bcrypt:
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        // new instance of user model;
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        await user.save();
        res.send("User Added successfully !");  
    } catch (error) {
        res.status(400).send('Error saving the user: ' + error.message);
    }
});


app.get("/user", async(req, res) => {
    const userEmail = req.body.email;
    try {
       const user = await User.find({email: userEmail}); 
       if(user.length === 0){
        res.status(404).send("user not found");
       }
       else{
        res.send(user);
       }
    } catch (error) {
        res.status(400).send('Error to get user' +  error.message);
    }
})

app.get("/feed", async(req, res) => {
    try {
        const data = await User.find({});
        res.send(data);   
    } catch (error) {
        res.status(400).send('Error feed the user', + error.message);
    }
})

app.delete('/user', async(req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        // or 
        // const user = await User.findByIdAndDelete({_id: userId});
        res.send('user deleted successfully');
    } catch (error) {
        res.status(400).send('error while delete user' + error.message);
    }
})


app.patch("/user", async(req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    //console.log(data);
    try {
        const user = await User.findByIdAndUpdate({_id: userId}, data, {returnDocument: "before"}); 
        console.log(user); // here older version of user is printed
        res.send('updated user firstName');
    } catch (error) {
        res.status(400).send("error while updating user" + error.message);
    }
})



app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Email is mandatory");
        } else if (!password) {
            throw new Error("Password is compulsory");
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("Email ID is not present in the database");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            res.send("User login successful!");
        } else {
            throw new Error("Password is not correct");
        }
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
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





