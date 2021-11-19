const Cities = require('../models/Cities');

const serialize = async (object) => {
	const { city_id, city, country } = object;
	return	{
		id: city_id,
		city,
		country,
	};
}

const validateCity = (city, countryId) => {
	if (!city || typeof city !== "string") return false;
	if (!countryId || typeof countryId !== "number") return false;

	return true;
}

const getAll = async () => {
	const cities = await Cities.getAll();
	return cities;
}

const getById = async (id) => {
	const city = await Cities.getById(id);
	return serialize(city);
}

const create = async (city, country_id) => {
	const isValid = validateCity(city, country_id);

	if (!isValid) return false;

	await Cities.create(city, country_id);

	return true;
}

const deleteById = async (id) => {
	await Cities.deleteById(id);
	return true;
}


module.exports = {
	getAll,
	getById,
	create,
	deleteById
}