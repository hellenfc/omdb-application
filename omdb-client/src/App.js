import React, { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://localhost:3004/movies';

    axios.get(targetUrl)
      .then((response) => {
        setLoading(false);
        setMovies(response.data);
      })
      .catch((e) => {
        setLoading(false);
        setError('Error al obtener listado. Intente nuevamente');
      });
  }, [])

  if (loading) {
    return <div className="App-container">
      <p>loading...</p>
    </div>
  }

  if (error !== '') {
    alert("Error al obtener listado. Intente nuevamente");
    return <div className="App-container"><p>ERROR: {error}</p></div>;
  }

  const renderTableElements = () => {
    return movies.map((movie, i) => {
      return <tr key={movie.id}>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td>{movie.type}</td>
        <td><img src={movie.poster} alt={`movie poster from ${movie.title}`} width="107" height="158" /></td>
      </tr>
    })
  }
  
  return (
    <div className="App">
      <div className="App-container">
        <p>
          Movies
        </p>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Año</th>
            <th>Tipo</th>
            <th>Poster</th>
          </tr>
          {renderTableElements()}
        </table>
      </div>
      </div>
  );
}

export default App;
