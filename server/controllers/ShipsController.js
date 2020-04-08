import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { shipsService } from "../services/ShipsService";
import { BadRequest } from "../utils/Errors";

export class ShipsController extends BaseController {

    constructor() {
      super("api/ships");
      this.router
        .get("", this.getAll)
        .get("/:id", this.getById)
        .put('/:id', this.edit)
        .post("", this.create)
        .delete("/:id", this.remove)
    }

    async edit(req, res, next) {
      try {
        let ship = await shipsService.edit(req.params.id, req.body)
        res.send(ship)
      } catch (error) {
        next(error)
      }
    }
    async remove(req, res, next) {
      try {
        let ship = await shipsService.remove(req.params.id)
        res.send(ship)
      } catch (error) {
        next(error)
      }
    }
    async getAll(req, res, next) {
      try {
        let ships = await shipsService.getAll()
        res.send(ships)
      } catch (error) {
        next(error);
      }
    }
  
    async getById(req, res, next) {
      try {
        let ship = await shipsService.getById(req.params.id)
        if (!ship) {
          throw new BadRequest("Invalid ship Id")
        }
        res.send(ship)
      } catch (error) {
        next(error);
      }
    }
    async create(req, res, next) {
      try {
        let ship = await shipsService.create(req.body)
        res.send(ship);
      } catch (error) {
        next(error);
      }
    }

}