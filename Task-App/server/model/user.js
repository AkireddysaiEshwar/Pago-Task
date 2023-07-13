import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);
