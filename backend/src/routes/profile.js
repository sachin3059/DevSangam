const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/userAuth");
const { validateEditProfileData } = require("../utils/validation");


profileRouter.get("/profile/view", userAuth, async(req, res) => {
    try {
        const user = req.user;
        res.send(user);    
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    } 
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
        if(!validateEditProfileData(req)){
          throw new Error("invalid edit data");
        }
        const loggedInUser = req.user;

        Object.keys(req.body).forEach(key => loggedInUser[key] = req.body[key]);

        await loggedInUser.save();

        res.json({
          message: `${loggedInUser.firstName}, profile update successfully`,
          data: loggedInUser,
        });

    } catch (error) {
        res.status(400).send("Eror: " + error.message);
        
    }
})


module.exports = profileRouter;