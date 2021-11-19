const connection = require("./connection");

const SQL_GETALL_QUERY = `
SELECT a.team_id, a.team, a.team_rating, b.city,
c.country, d.league FROM teams AS a
INNER JOIN cities AS b
ON b.city_id = a.city_id
INNER JOIN countries AS c
ON a.country_id = c.country_id
INNER JOIN leagues AS d
ON a.league_id = d.league_id
ORDER BY a.team_id
`;

const getAll = async () => {
	const [teams] = await connection.execute(SQL_GETALL_QUERY);

	return teams;
}

const getById = async (id) => {
	const [team] = await connection.execute('SELECT * FROM teams WHERE team_id=?', [id]);

	if (team.length === 0) return null;

	return team[0];
}

const create = async (team, teamRating, cityId, countryId, leagueId) => {
	connection.execute('INSERT INTO teams (team, team_rating, city_id, country_id, league_id) VALUES (?, ?, ?, ?, ?)', [
		team, teamRating, cityId, countryId, leagueId
	]);
}

const deleteById = async (id) => {
	connection.execute('DELETE FROM teams WHERE team_id=?', [id]);
	connection.execute('ALTER TABLE teams AUTO_INCREMENT = 1');
}

module.exports = {
	getAll,
	getById,
	create,
	deleteById,
}