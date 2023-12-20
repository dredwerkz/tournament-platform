import * as teamsModel from "./teams.model.js";

export async function getAllTeams(_req, res) {
    const teams = await teamsModel.getAllTeams();

    res.status(200).json({
        success: true,
        payload: teams,
    });
}

export async function createTeam(req, res) {
    const somethingIsMissing =
        req.body.task === undefined || req.body.completionDate === undefined;

    if (somethingIsMissing) {
        res.status(400).json({
            success: false,
            error: "Please provide a 'task' and 'completionDate'",
        });
        return;
    }

    const created = await teamsModel.createTeam({
        task: req.body.task,
        completionDate: req.body.completionDate,
    });

    res.status(201).json({
        success: true,
        payload: created,
    });
}

export async function deleteTeamById(req, res) {
    const teamId = req.params.id;
    const deleted = await teamsModel.deleteTeamById(teamId);

    if (!deleted) {
        res.status(404).json({
            success: false,
            error: `No Team with id ${teamId} found`,
        });
        return;
    }

    res.status(200).json({
        success: true,
        payload: deleted,
    });
}
