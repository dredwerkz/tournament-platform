import express from "express";
import morgan from "morgan";
import { teamsRouter } from "./teams/teams.router.js";
import { playersRouter } from "./players/players.router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/teams", teamsRouter);
app.use("/api/players", playersRouter);

export default app;
