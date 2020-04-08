import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import ShipSchema from "../models/Ship";
import LogSchema from "../models/Log";
import CommentSchema from "../models/Comment";


class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Ships = mongoose.model("Ship", ShipSchema);

  Comments = mongoose.model("Comment", CommentSchema);

  Logs = mongoose.model("Log", LogSchema);

}

export const dbContext = new DbContext();
