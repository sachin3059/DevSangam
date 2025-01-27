const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status type`
      },
    },
  },
  {
    timestamps: true, 
  }
);

// creating compound indexing:
connectionSchema.index({fromUserId: 1, toUserId: 1});


// pre middleware
connectionSchema.pre("save", function(next){
  const connectionRequest = this;
  //check if the fromUserId is same as toUserId
  if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
    throw new Error("Cannot send connection request to yourself!");
  }
  next();
});

const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;
