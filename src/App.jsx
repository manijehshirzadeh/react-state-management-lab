import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  // Handle state management when adding a new fighter
  const handleAddFighter = (fighterToBeAdded) => {
    if (money >= fighterToBeAdded.price) {
      setZombieFighters((prevFighters) =>
        prevFighters.filter((fighter) => {
          return fighter.name !== fighterToBeAdded.name;
        })
      );
      setTeam((prevFighters) => [...prevFighters, fighterToBeAdded]);
      setMoney((prevMoney) => prevMoney - fighterToBeAdded.price);
      setTotalStrength((prev) => prev + fighterToBeAdded.strength);
    } else {
      console.log("Not enough money");
    }
  };

  // Handle state management when removing an existing fighter
  const handleRemoveFighter = (fighterToBeRemoved) => {
    const updatedFighters = [...team].filter((fighter) => {
      return fighter.name !== fighterToBeRemoved.name;
    });
    setTeam(updatedFighters);
    setZombieFighters((prevFighters) => [...prevFighters, fighterToBeRemoved]);
    setMoney((prevMoney) => prevMoney + fighterToBeRemoved.price);
    setTotalStrength((prev) => prev - fighterToBeRemoved.strength);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <div>
        {/* Display the current value of money */}
        <h2>Money:{money}</h2>
        {/* Display total team strength*/}
        <h2>Team Strength: {totalStrength}</h2>
      </div>

      {/* Display current team */}
      <div>
        <h2>Your Team</h2>
        <h4>Pick some team members </h4>
        <ul style={{ display: "flex", gap: "10px" }}>
          {team.map((fighter) => (
            <div key={fighter.name}>
              <img src={fighter.img} alt="zombie fighter placholder image" />
              <h4> {fighter.name} </h4>
              <li> Price: {fighter.price} </li>
              <li> strength: {fighter.strength}</li>
              <li> agility: {fighter.agility}</li>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div>
        {/* Display the list of zombie fighters */}
        <h2>Fighters</h2>
        <ul style={{ display: "flex", gap: "10px" }}>
          {zombieFighters.map((fighter) => (
            <div key={fighter.name}>
              <img src={fighter.img} alt="zombie fighter placholder image" />
              <h4> {fighter.name} </h4>
              <li> Price: {fighter.price} </li>
              <li> strength: {fighter.strength}</li>
              <li> agility: {fighter.agility}</li>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
