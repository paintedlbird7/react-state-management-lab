import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    }
  ]);

  const addToTeam = (fighter) => {
    setTeam((prevTeam) => [...prevTeam, fighter]);
    setMoney((prevMoney) => prevMoney - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam((prevTeam) => prevTeam.filter(f => f.id !== fighter.id));
    setZombieFighters((prevFighters) => [...prevFighters, fighter]);
    setMoney((prevMoney) => prevMoney + fighter.price);
  };

  return (
    <div>
      <h2>Zombie Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <h3>{fighter.name}</h3>
            <img src={fighter.img} alt={fighter.name} width="100" />
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => addToTeam(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <h3>{fighter.name}</h3>
            <img src={fighter.img} alt={fighter.name} width="100" />
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Money: ${money}</h2>
    </div>
  );
}

export default App;
