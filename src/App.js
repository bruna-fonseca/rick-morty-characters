import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [personagem, setPersonagem] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((data) => setPersonagem(data.results))
  }, []);

  useEffect(() => {
    setFiltro(
      personagem.filter(personagem => {
        return personagem.name.includes(busca);
      })
    );
  }, [busca, personagem]);

  return (
   <div className="container">
     <input 
        placeholder="Digite o nome do personagem"
        onChange={(e) => setBusca(e.target.value)}
     />
     {filtro.map((personagem) => (
       <div className="card" key={personagem.name}>
          <p>{personagem.name}</p>
          <img src={personagem.image} alt={personagem.name} />
      </div>
     ))}
   </div>
  );
}

export default App;
