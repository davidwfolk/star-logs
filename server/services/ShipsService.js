import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipsService {
  async getByTitle(title) {
    let ship = await dbContext.Ships.findOne({ title: title })
    return ship
  }
  async edit(id, body) {
    let ship = await dbContext.Ships.findByIdAndUpdate(id, body, { new: true })
    return ship
  }
  async remove(id) {
    let ship = await dbContext.Ships.findByIdAndDelete(id)
    return ship
  }
  async create(body) {
    let ship = await dbContext.Ships.create(body)
    return ship
  }
  async getAll(query = {}) {
    let ships = await dbContext.Ships.find(query);
    return ships;
  }
  async getById(id) {
    let ship = await dbContext.Ships.findById(id);
    if (!ship) {
      throw new BadRequest("Invalid Id");
    }
    return ship;
  }
}

export const shipsService = new ShipsService();