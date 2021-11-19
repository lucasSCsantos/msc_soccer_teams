# Instalação

1. Clone o repositório

2. Instale as dependencias

```javascript
npm install
```

3. Rode o app

```javascript
npm start
```

# End Points

### PARA TODOS ESTÃO HABILITADOS OS MÉTODOS POST, GET E DELETE

### Times
>#### Acessar todos os times:
>
>```bash
>http://localhost:3000/teams
>```
>```json
>[
>   { 
>     "id": 1,
>     "team": "PSG",
>     "rating": 84,
>     "city": "Paris",
>     "country": "France",
>     "league": "Ligue 1",
>     "players": [],
>   },
>   ...
> ]
>```
>#### Acessar apenas um time:
>
>```bash
>http://localhost:3000/teams/:id
>```
>```json
>  { 
>    "id": 1,
>    "team": "PSG",
>    "rating": 84,
>    "city": "Paris",
>    "country": "France",
>    "league": "Ligue 1",
>    "players": [
>       {
>         "id": 1,
>         "player": "Neymar"
>       },
>     ...
>    ],
>  }
>```
>#### Adicionar um time:
>
>```bash
>http://localhost:3000/teams
>```
>A estrutura para adicionar um time deve ser essa:
>```json
>   {
>     "team": "Lazio",
>     "team_rating": 80,
>     "city_id": 5, //Roma
>     "country_id": 4, //Itália
>     "league_id": 4 //Calcio A
>   }
>```
>#### Deletar um time:
>
>```bash
>http://localhost:3000/teams/:id
>```
- team: "string"
- rating: "integer"
- city: "string"
- league: "string"
- players: "array"
