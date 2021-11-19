const Leagues = require('../services/Leagues');

const getAll =  async (req, res) => {
	const leagues = await Leagues.getAll();
	
	res.status(200).json(leagues);
}

const getById = async (req, res) => {
	const { id } = req.params;
	const league = await Leagues.getById(id);

	if (!league) return res.status(404).json({ message: 'Not Found!' });

	res.status(200).json(league);
}

const create = async (req, res) => {
	const { league, country_id } = req.body;
	
	const newLeague = await Leagues.create(league, country_id);

	if (!newLeague) return res.status(400).json({ message: "Dados Inválidos" });

	res.status(201).json({ message: 'Liga criada com sucesso!' });
}

const deleteById = async (req, res) => {
	const { id } = req.params;
	await Leagues.deleteById(id);

	res.status(204).end();
}


module.exports = {
	getAll,
	getById,
	create,
	deleteById,
}