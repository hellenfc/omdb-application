## Available Scripts

In the project directory, you can run:

### `npm install`
Install Dependencies

### `npm start`
Runs the apps

### Available Routes
`/sync`: Extracts data from OMDb API, then saving it in MySql database.

`/movies`: Returns the list of movies from 2020 using the word "Love"

Create `ormconfig.json` inside `omdb-server`

{
    "type": "mysql",
    "host": ****,
    "port": ****,
    "username": ****,
    "password": ****,
    "database": ****,
    "entities": [
        "./dist/entity/*.js"
    ],
    "logging": true,
    "synchronize": true
}

