import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [inf, setInf] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      setInf(res.data.results);
    });
  });
  console.log(inf);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="container">
        {inf.map((item) => {
          return (
            <div className="card">
              <img
                src={item.image}
                width="200px"
                height="250px"
                className="img"
              />
              <h2>{item.name}</h2>
              <p>Last location</p>
              <h3>{item.location.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
