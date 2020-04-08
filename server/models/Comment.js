import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {
    description: { type: String, required: true },
    log: {type: ObjectId, ref: "Log", required: true, default: null},
    ship: {type: ObjectId, ref: "Ship", required: true, default: null}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment;