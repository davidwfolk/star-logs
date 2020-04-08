import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    description: { type: String, required: true }
  }
)

export default Comment;