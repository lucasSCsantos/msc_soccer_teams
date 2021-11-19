const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT|| 3000;

const Teams = require('./controllers/Teams');
const Players = require('./controllers/Players');
const Cities = require('./controllers/Cities');
const Leagues = require('./controllers/Leagues');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('ok');
})

app.get('/teams', Teams.getAll);
app.get('/teams/:id', Teams.getById);
app.post('/teams', Teams.create);
app.delete('/teams/:id', Teams.deleteById);

app.get('/players', Players.getAll);
app.get('/players/:id', Players.getByTeamId);
app.post('/players', Players.create);
app.delete('/players/:id', Players.deleteById);

app.get('/cities', Cities.getAll);
app.get('/cities/:id', Cities.getById);
app.post('/cities', Cities.create);
app.delete('/cities/:id', Cities.deleteById);

app.get('/leagues', Leagues.getAll);
app.get('/leagues/:id', Leagues.getById);
app.post('/leagues', Leagues.create);
app.delete('/leagues/:id', Leagues.deleteById);

app.listen(PORT, () => console.log(`Example app listening on port port!`));