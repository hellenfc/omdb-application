import express, { response } from 'express';
import { createConnection } from "typeorm";
import  dotenv  from "dotenv";

import { Movies } from "./entity/Movies";
import { sync } from "./helpers";

const port = process.env.PORT || 3004;
const app = express();
dotenv.config();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

createConnection().then(connection => {
    app.get('/', async (req, res) => {
        res.send("Hello from omdb-app api")
    });

    app.get('/sync', async (req, res) => {
        const result = await sync();
        console.log('result', result.data)
        try {
            result.data.Search.forEach(element => {
                const movie = new Movies();
                movie.title = element.Title;
                movie.year = element.Year;
                movie.type = element.Type;
                movie.poster = element.Poster;
                movie.id = element.imdbID;
                
                return connection.manager
                .save(movie)
                .then(movie => {
                    console.log('Movie saved', movie.title);
                })
                .catch((error) =>{
                    console.log('Error:', error)
                })
            });
        } catch (error) {
            console.log('Error:', error)   
        }
        res.json(result.data);
    })

    let MovieRepository = connection.getRepository( Movies);

    app.get('/movies', async (req, res) => {
        let savedMovies = await MovieRepository.find();
        res.send(savedMovies);
        console.log("All movies from the db: ", savedMovies);
    })

    app.listen(port, () => console.log(`App listening in PORT ${port}`));
})


// TODO
// - Manejar la paginacion
