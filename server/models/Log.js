import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Log = new Schema(
  {
    logType: { type: String, required: true},
    starDate: { type: Number, required: true},
    ship: {type: ObjectId, ref: "Ship", required: true, default: null}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Log;