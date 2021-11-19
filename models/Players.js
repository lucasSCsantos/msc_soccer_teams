const connection = require("./connection");

const SQL_GETALL_QUERY = `
SELECT a.player_id, a.player, b.team FROM players AS a
INNER JOIN teams AS b
ON b.team_id = a.team_id
ORDER BY a.player_id`;

const getAll = async () => {
	const [players] = await connection.execute(SQL_GETALL_QUERY);

	return players;
}

const getByTeamId = async (id) => {
	const [player] = await connection.execute('SELECT * FROM players WHERE team_id=?', [id]);

	if (player.length === 0) return null;

	return player;
}

const create = async (player, team_id) => {
	connection.execute('INSERT INTO players (player, team_id) VALUES (?, ?)', [
		player, team_id
	]);
}

const deleteById = async (id) => {
	connection.execute('DELETE FROM players WHERE player_id=?', [id]);
	connection.execute('ALTER TABLE players AUTO_INCREMENT = 1');
}

module.exports = {
	getAll,
	getByTeamId,
	create,
	deleteById
}