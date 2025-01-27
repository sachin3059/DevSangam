const express = require("express");
const requestRouter = express.Router();

requestRouter.post('/sendConnectionRequest', async(req, res) => {
    // sending connection request
    res.send("sending connection request");
})

module.exports = requestRouter;