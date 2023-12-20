/**
 * Helper functions to interact with the "teams" table in the database.
 */

import { pool } from "../db/index.js";

export async function getAllTeams() {
    const sqlQuery =
        "SELECT id, task, completion_date FROM teams ORDER BY completion_date ASC, id ASC;";
    const result = await pool.query(sqlQuery);
    const teams = result.rows;
    return teams;
}

export async function createTeam(newTeam) {
    const sqlQuery =
        "INSERT INTO teams (task, completion_date) VALUES ($1, $2) RETURNING *;";
    const parameterValues = [newTeam.task, newTeam.completionDate];
    const result = await pool.query(sqlQuery, parameterValues);
    const created = result.rows[0];
    return created;
}

export async function deleteTeamById(teamId) {
    const sqlQuery = "DELETE FROM teams WHERE id = $1 RETURNING *;";
    const parameterValues = [teamId];
    const result = await pool.query(sqlQuery, parameterValues);
    const deleted = result.rows[0];
    return deleted;
}
