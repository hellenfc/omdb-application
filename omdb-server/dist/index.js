"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const Movies_1 = require("./entity/Movies");
const helpers_1 = require("./helpers");
const port = process.env.PORT || 3004;
const app = express_1.default();
dotenv_1.default.config();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
typeorm_1.createConnection().then(connection => {
    app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send("Hello from omdb-app api");
    }));
    app.get('/sync', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield helpers_1.sync();
        console.log('result', result.data);
        try {
            result.data.Search.forEach(element => {
                const movie = new Movies_1.Movies();
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
                    .catch((error) => {
                    console.log('Error:', error);
                });
            });
        }
        catch (error) {
            console.log('Error:', error);
        }
        res.json(result.data);
    }));
    let MovieRepository = connection.getRepository(Movies_1.Movies);
    app.get('/movies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let savedMovies = yield MovieRepository.find();
        res.send(savedMovies);
        console.log("All movies from the db: ", savedMovies);
    }));
    app.listen(port, () => console.log(`App listening in PORT ${port}`));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTRDO0FBQzVDLHFDQUEyQztBQUMzQyxvREFBOEI7QUFFOUIsNENBQXlDO0FBQ3pDLHVDQUFpQztBQUVqQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdEMsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUM1QixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsZ0RBQWdELENBQUMsQ0FBQztJQUM3RixJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBRUgsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7SUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNoQyxNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQUksRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJO1lBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFFMUIsT0FBTyxVQUFVLENBQUMsT0FBTztxQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQztxQkFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0I7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsSUFBSSxlQUFlLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBRSxlQUFNLENBQUMsQ0FBQztJQUV4RCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFdBQVcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IHJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCAgZG90ZW52ICBmcm9tIFwiZG90ZW52XCI7XG5cbmltcG9ydCB7IE1vdmllcyB9IGZyb20gXCIuL2VudGl0eS9Nb3ZpZXNcIjtcbmltcG9ydCB7IHN5bmMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDQ7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0XCIpO1xuICAgIG5leHQoKTtcbn0pO1xuXG5jcmVhdGVDb25uZWN0aW9uKCkudGhlbihjb25uZWN0aW9uID0+IHtcbiAgICBhcHAuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHJlcy5zZW5kKFwiSGVsbG8gZnJvbSBvbWRiLWFwcCBhcGlcIilcbiAgICB9KTtcblxuICAgIGFwcC5nZXQoJy9zeW5jJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN5bmMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdC5kYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEuU2VhcmNoLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92aWUgPSBuZXcgTW92aWVzKCk7XG4gICAgICAgICAgICAgICAgbW92aWUudGl0bGUgPSBlbGVtZW50LlRpdGxlO1xuICAgICAgICAgICAgICAgIG1vdmllLnllYXIgPSBlbGVtZW50LlllYXI7XG4gICAgICAgICAgICAgICAgbW92aWUudHlwZSA9IGVsZW1lbnQuVHlwZTtcbiAgICAgICAgICAgICAgICBtb3ZpZS5wb3N0ZXIgPSBlbGVtZW50LlBvc3RlcjtcbiAgICAgICAgICAgICAgICBtb3ZpZS5pZCA9IGVsZW1lbnQuaW1kYklEO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uLm1hbmFnZXJcbiAgICAgICAgICAgICAgICAuc2F2ZShtb3ZpZSlcbiAgICAgICAgICAgICAgICAudGhlbihtb3ZpZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb3ZpZSBzYXZlZCcsIG1vdmllLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKSAgIFxuICAgICAgICB9XG4gICAgICAgIHJlcy5qc29uKHJlc3VsdC5kYXRhKTtcbiAgICB9KVxuXG4gICAgbGV0IE1vdmllUmVwb3NpdG9yeSA9IGNvbm5lY3Rpb24uZ2V0UmVwb3NpdG9yeSggTW92aWVzKTtcblxuICAgIGFwcC5nZXQoJy9tb3ZpZXMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgbGV0IHNhdmVkTW92aWVzID0gYXdhaXQgTW92aWVSZXBvc2l0b3J5LmZpbmQoKTtcbiAgICAgICAgcmVzLnNlbmQoc2F2ZWRNb3ZpZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCBtb3ZpZXMgZnJvbSB0aGUgZGI6IFwiLCBzYXZlZE1vdmllcyk7XG4gICAgfSlcblxuICAgIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgaW4gUE9SVCAke3BvcnR9YCkpO1xufSlcblxuXG4vLyBUT0RPXG4vLyAtIE1hbmVqYXIgbGEgcGFnaW5hY2lvblxuIl19