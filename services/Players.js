const Players = require('../models/Players');

const serialize = (object) => {
	const { player, player_id, team } = object;
	return {
		id: player_id,
		player,
		team,
	}
}

const serializeByTeam = (object) => {
	const { player, player_id } = object;
	return {
		id: player_id,
		player,
	}
}

const validatePlayer = (player, team_id) => {
	if (!player || typeof player !== "string") return false;
	if (!team_id || typeof team_id !== "number") return false;

	return true;
}

const getAll = async () => {
	const players = await Players.getAll();
	return players.map(serialize);
}

const getByTeamId = async (id) => {
	const players = await Players.getByTeamId(id);
	if (players) return players.map(serializeByTeam);
	return players;
};

const create = async (player, team_id) => {
	const isValid = validatePlayer(player, team_id);

	if (!isValid) return false;

	await Players.create(player, team_id);

	return true;
}

const deleteById = async (id) => {
	await Players.deleteById(id);
	return true;
}



module.exports = {
	getAll,
	getByTeamId,
	create,
	deleteById
}