const Cities = require('../services/Cities');

const getAll =  async (req, res) => {
	const cities = await Cities.getAll();
	
	res.status(200).json(cities);
}

const getById = async (req, res) => {
	const { id } = req.params;
	const city = await Cities.getById(id);

	if (!city) return res.status(404).json({ message: 'Not Found!' });

	res.status(200).json(city);
}

const create = async (req, res) => {
	const { city, country_id } = req.body;
	
	const newCity = await Cities.create(city, country_id);

	if (!newCity) return res.status(400).json({ message: "Dados Inválidos" });

	res.status(201).json({ message: 'Cidade criada com sucesso!'});
}

const deleteById = async (req, res) => {
	const { id } = req.params;
	await Cities.deleteById(id);

	res.status(204).end();
}


module.exports = {
	getAll,
	getById,
	create,
	deleteById,
}