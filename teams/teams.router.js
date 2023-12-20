import express from "express";
import * as teamsController from "./teams.controller.js";

export const teamsRouter = express.Router();

teamsRouter.get("/", teamsController.getAllTodos);
teamsRouter.post("/", teamsController.createTodo);
teamsRouter.delete("/:id", teamsController.deleteTodoById);
