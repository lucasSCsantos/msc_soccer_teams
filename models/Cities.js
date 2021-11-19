const connection = require("./connection");

const SQL_GETALL_QUERY = `
SELECT a.city_id, a.city, b.country FROM cities AS a
INNER JOIN countries AS b
ON b.country_id = a.country_id
ORDER BY a.city_id`;

const getAll = async () => {
	const [cities] = await connection.execute(SQL_GETALL_QUERY);

	return cities;
}

const getById = async (id) => {
	const [city] = await connection.execute('SELECT * FROM cities WHERE city_id=?', [id]);

	if (city.length === 0) return null;

	return city[0];
}

const create = async (city, country_id) => {
	connection.execute('INSERT INTO cities (city, country_id) VALUES (?, ?)', [
		city, country_id
	]);
}

const deleteById = async (id) => {
	connection.execute('DELETE FROM cities WHERE city_id=?', [id]);
	connection.execute('ALTER TABLE cities AUTO_INCREMENT = 1');
}

module.exports = {
	getAll,
	getById,
	create,
	deleteById,
}