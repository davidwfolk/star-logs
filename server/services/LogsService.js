import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class LogsService {
  async getByTitle(title) {
    let log = await dbContext.Logs.findOne({ title: title })
    return log
  }
  async edit(id, body) {
    let log = await dbContext.Logs.findByIdAndUpdate(id, body, { new: true })
    return log
  }
  async remove(id) {
    let log = await dbContext.Logs.findByIdAndDelete(id)
    return log
  }
  async create(body) {
    let log = await dbContext.Logs.create(body)
    return log
  }
  async getAll(query = {}) {
    let logs = await dbContext.Logs.find(query);
    return logs;
  }
  async getById(id) {
    let log = await dbContext.Logs.findById(id);
    if (!log) {
      throw new BadRequest("Invalid Id");
    }
    return log;
  }
}

export const logsService = new LogsService();