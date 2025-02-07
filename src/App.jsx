import React, { useState } from 'react';
import './style/App.css';
import PlanetTable from "./components/PlanetTable.jsx"
import PlanetForm from "./components/PlanetForm.jsx"
import { lstPlanets } from "./data/planets";

function Header() {
  return (
    <header class="app-header">
      <h1>Planet Projects</h1>
      <nav></nav>
    </header>
  );
}

function App() {

  const [planets, setPlanets] = useState(lstPlanets);

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet]);
  };

  console.log(planets)

  return [
    <Header />,
    <main>
      <section>
        <PlanetTable planets={planets} />
      </section>
      <section>
        <PlanetForm addPlanet={addPlanet} />
      </section>
    </main>
  ]
}

export default App;
