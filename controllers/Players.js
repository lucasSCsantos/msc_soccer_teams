const Players = require('../services/Players');

const getAll =  async (req, res) => {
	const players = await Players.getAll();
	
	res.status(200).json(players);
}

const getByTeamId = async (req, res) => {
	const { id } = req.params;
	const players = await Players.getByTeamId(id);

	if (!players) return res.status(404).json({ message: 'Not Found!'});

	res.status(200).json(players);
}

const create = async (req, res) => {
	const { player, team_id } = req.body;
	
	const newPlayer = await Players.create(player, team_id);

	if (!newPlayer) return res.status(400).json({ message: "Dados Inválidos" });

	res.status(201).json({ message: 'Jogador criado com sucesso!'});
}

const deleteById = async (req, res) => {
	const { id } = req.params;
	await Players.deleteById(id);

	res.status(204).end();
}

module.exports = {
	getAll,
	getByTeamId,
	create,
	deleteById,
}