import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ship = new Schema(
  {
    class: { type: String, default:"How would I know this? I'm not a Trekkie!", required: true},
    title: { type: String, required: true },
    registry: { type: String, default: "Seriously? What does this even mean?", required: true},
    
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

export default Ship;