import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
      type: String,
      required: true,
    },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  followers:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  ],
    following:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
}, {  timestamps: true,}
);

const User = mongoose.model("User", userSchema);

export default User;
