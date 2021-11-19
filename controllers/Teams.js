const Teams = require('../services/Teams');

const getAll =  async (req, res) => {
	try {
		const teams = await Teams.getAll();
		
		res.status(200).json(teams);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const getById = async (req, res) => {
	const { id } = req.params;
	const team = await Teams.getById(id);

	if (!team) return res.status(404).json({ message: 'Not Found!'});

	res.status(200).json(team);
}

const create = async (req, res) => {
	const { team, team_rating, city_id, country_id, league_id } = req.body;
	
	const newTeam = await Teams.create(team, team_rating, city_id, country_id, league_id);

	if (!newTeam) return res.status(400).json({ message: "Dados Inválidos" });

	res.status(201).json({ message: 'Time criado com sucesso!'});
}

const deleteById = async (req, res) => {
	const { id } = req.params;
	await Teams.deleteById(id);

	res.status(204).end();
}


module.exports = {
	getAll,
	getById,
	create,
	deleteById,
}