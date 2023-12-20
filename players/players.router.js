import express from "express";
import * as playersController from "./players.controller.js";

export const playersRouter = express.Router();

playersRouter.get("/", playersController.getAllTodos);
playersRouter.post("/", playersController.createTodo);
playersRouter.delete("/:id", playersController.deleteTodoById);
