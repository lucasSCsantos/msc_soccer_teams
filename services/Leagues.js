const Leagues = require('../models/Leagues');

const serialize = async (object) => {
	const { league_id, league, country } = object;
	return	{
		id: league_id,
		league,
		country,
	};
}

const validateLeague = (league, countryId) => {
	if (!league || typeof league !== "string") return false;
	if (!countryId || typeof countryId !== "number") return false;

	return true;
}

const getAll = async () => {
	const leagues = await Leagues.getAll();
	return leagues;
}

const getById = async (id) => {
	const league = await Leagues.getById(id);
	return serialize(league);
}

const create = async (league, country_id) => {
	const isValid = validateLeague(league, country_id);

	if (!isValid) return false;

	await Leagues.create(league, country_id);

	return true;
}

const deleteById = async (id) => {
	await Leagues.deleteById(id);
	return true;
}


module.exports = {
	getAll,
	getById,
	create,
	deleteById
}