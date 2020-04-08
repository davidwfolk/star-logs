import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Log = new Schema(
  {
    logType: { type: String, required: true},
    starDate: { type: Number, required: true},
  }
)

export default Log;