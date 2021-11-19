const connection = require("./connection");

const SQL_GETALL_QUERY = `
SELECT a.league_id, a.league, b.country FROM leagues AS a
INNER JOIN countries AS b
ON b.country_id = a.country_id
ORDER BY a.league_id`;

const getAll = async () => {
	const [leagues] = await connection.execute(SQL_GETALL_QUERY);

	return leagues;
}

const getById = async (id) => {
	const [league] = await connection.execute('SELECT * FROM leagues WHERE league_id=?', [id]);

	if (league.length === 0) return null;

	return league[0];
}

const create = async (city, country_id) => {
	connection.execute('INSERT INTO leagues (league, country_id) VALUES (?, ?)', [
		city, country_id
	]);
}

const deleteById = async (id) => {
	connection.execute('DELETE FROM leagues WHERE league_id=?', [id]);
	connection.execute('ALTER TABLE leagues AUTO_INCREMENT = 1');
}

module.exports = {
	getAll,
	getById,
	create,
	deleteById,
}