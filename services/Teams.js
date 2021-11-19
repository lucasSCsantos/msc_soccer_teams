const Teams = require('../models/Teams');
const Players = require('./Players');

const serialize = async (object) => {
	const { team_id, team, team_rating, city, country, league } = object;
	const players = await Players.getByTeamId(team_id);
	return	{
		id: team_id,
		team: team,
		rating: team_rating,
		city,
		country,
		league,
		players,
	};
}

const validateTeam = (team, teamRating, cityId, countryId, leagueId) => {
	if (!team || typeof team !== "string") return false;
	if (!teamRating || typeof teamRating !== "number") return false;
	if (!cityId || typeof cityId !== "number") return false;
	if (!countryId || typeof countryId !== "number") return false;
	if (!leagueId || typeof leagueId !== "number") return false;

	return true;
}

const getAll = async () => {
	const teams = await Teams.getAll();
	const teamsList = await Promise.all(teams.map(serialize))
	return teamsList;
}

const getById = async (id) => {
	const team = await Teams.getById(id);
	return serialize(team);
}

const create = async (team, team_rating, city_id, country_id, league_id) => {
	const isValid = validateTeam(team, team_rating, city_id, country_id, league_id);

	if (!isValid) return false;

	await Teams.create(team, team_rating, city_id, country_id, league_id);

	return true;
}

const deleteById = async (id) => {
	await Teams.deleteById(id);
	return true;
}


module.exports = {
	getAll,
	getById,
	create,
	deleteById
}