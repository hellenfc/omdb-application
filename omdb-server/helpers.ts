import axios from 'axios';

export const sync = async () => {
    return await axios.get('http://www.omdbapi.com/?apikey=5eec5adc&s=love&type=movie&page=3&y=2020');
}