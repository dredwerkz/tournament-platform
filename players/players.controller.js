import * as playersModel from "./players.model.js";

export async function getAllPlayers(_req, res) {
    const players = await playersModel
.getAllPlayers();

    res.status(200).json({
        success: true,
        payload: players,
    });
}

export async function createPlayer(req, res) {
    const somethingIsMissing =
        req.body.task === undefined || req.body.completionDate === undefined;

    if (somethingIsMissing) {
        res.status(400).json({
            success: false,
            error: "Please provide a 'task' and 'completionDate'",
        });
        return;
    }

    const created = await playersModel
.createPlayer({
        task: req.body.task,
        completionDate: req.body.completionDate,
    });

    res.status(201).json({
        success: true,
        payload: created,
    });
}

export async function deletePlayerById(req, res) {
    const playerId = req.params.id;
    const deleted = await playersModel
.deletePlayerById(playerId);

    if (!deleted) {
        res.status(404).json({
            success: false,
            error: `No player with id ${playerId} found`,
        });
        return;
    }

    res.status(200).json({
        success: true,
        payload: deleted,
    });
}
