import { useState } from "react";

function PlanetForm({ addPlanet }) {

  const [newPlanet, setNewPlanet] = useState({
    name: "",
    diameter: null,
    gravity: "",
    terrain: "",
    population: null,
    residents: []
  });

  const [newResident1, setNewResident1] = useState({
    name: "", birthYear: null, height: null, gender: ""
  });

  const [newResident2, setNewResident2] = useState({
    name: "", birthYear: null, height: null, gender: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlanet({ ...newPlanet, residents: [...newPlanet.residents, newResident1, newResident2] });
  };

  return (

    <form onSubmit={handleSubmit}>
      <table>
        <caption>Planet hinzufügen</caption>
        <tr>
          <th>Name:</th>
          <td>
            <input type="text" placeholder="Name" value={newPlanet.name} name="name"
              onChange={(e) => { setNewPlanet({ ...newPlanet, name: e.target.value }); }} />
          </td>
          <td rowSpan={5}>
            <table className={"resident"}>
              <th>Namhafte Bewohner1</th>
              <tr>
                <td>
                  <input type="text" placeholder="Name" value={newResident1.name} name="resident-name"
                    onChange={(e) => { setNewResident1({ ...newResident1, name: e.target.value }); }} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Geburtsjahr" value={newResident1.birthYear} name="resident-birthYear"
                    onChange={(e) => { setNewResident1({ ...newResident1, birthYear: e.target.value }); }} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Grösse(cm)" value={newResident1.height} name="resident-height"
                    onChange={(e) => { setNewResident1({ ...newResident1, height: e.target.value }); }} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Gschlecht" value={newResident1.gender} name="resident-gender"
                    onChange={(e) => { setNewResident1({ ...newResident1, gender: e.target.value }); }} />
                </td>
              </tr>
            </table>
          </td>
          <td rowSpan={5}>
            <table className={"resident"}>
              <th>Namhafte Bewohner2</th>
              <tr>
                <td>
                  <input type="text" placeholder="Name" value={newResident2.name} name="resident-name"
                    onChange={(e) => { setNewResident2({ ...newResident2, name: e.target.value }); }} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Geburtsjahr" value={newResident2.birthYear} name="resident-birthYear"
                    onChange={(e) => { setNewResident2({ ...newResident2, birthYear: e.target.value }); }} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Grösse(cm)" value={newResident2.height} name="resident-height"
                    onChange={(e) => { setNewResident2({ ...newResident2, height: e.target.value }); }} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Gschlecht" value={newResident2.gender} name="resident-gender"
                    onChange={(e) => { setNewResident2({ ...newResident2, gender: e.target.value }); }} />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <th>Durchmesser(km):</th>
          <td>
            <input type="text" placeholder="Durchmesser(km)" value={newPlanet.diameter} name="diameter"
              onChange={(e) => { setNewPlanet({ ...newPlanet, diameter: e.target.value }); }} />
          </td>
        </tr>
        <tr>
          <th>Gravitation:</th>
          <td>
            <input type="number" placeholder="Gravitation" value={newPlanet.gravity} name="gravity"
              onChange={(e) => { setNewPlanet({ ...newPlanet, gravity: e.target.value }); }} />
          </td>
        </tr>
        <tr>
          <th>Terrain:</th>
          <td>
            <input type="text" placeholder="Terrain" value={newPlanet.terrain} name="terrain"
              onChange={(e) => { setNewPlanet({ ...newPlanet, terrain: e.target.value }); }} />
          </td>
        </tr>
        <tr>
          <th>Bevölkerung:</th>
          <td>
            <input type="number" placeholder="Bevölkerung" value={newPlanet.population} name="population"
              onChange={(e) => { setNewPlanet({ ...newPlanet, population: e.target.value }); }} />
          </td>
        </tr>
        <button type="submit">hinzufügen</button>
      </table>
    </form >


    // <form onSubmit={handleSubmit}>
    //   <table>
    //     <caption>Planet hinzufügen</caption>
    //     <tr>
    //       <th>Name:</th>
    //       <td>
    //         <input type="text" placeholder="Name" value={newPlanet.name} name="name"
    //           onChange={(e) => { setNewPlanet({ ...newPlanet, name: e.target.value }); }} />
    //       </td>
    //     </tr>
    //     <tr>
    //       <th>Durchmesser(km):</th>
    //       <td>
    //         <input type="text" placeholder="Name" value={newPlanet.diameter} name="name"
    //           onChange={(e) => { setNewPlanet({ ...newPlanet, diameter: e.target.value }); }} />
    //       </td>
    //     </tr>
    //     <tr>
    //       <th>Gravitation:</th>
    //       <td>
    //         <input type="number" placeholder="Gravitation" value={newPlanet.gravity} name="gravity"
    //           onChange={(e) => { setNewPlanet({ ...newPlanet, gravity: e.target.value }); }} />
    //       </td>
    //     </tr>
    //     <tr>
    //       <th>Terrain:</th>
    //       <td>
    //         <input type="text" placeholder="Terrain" value={newPlanet.terrain} name="terrain"
    //           onChange={(e) => { setNewPlanet({ ...newPlanet, terrain: e.target.value }); }} />
    //       </td>
    //     </tr>
    //     <tr>
    //       <th>Bevölkerung:</th>
    //       <td>
    //         <input type="number" placeholder="Bevölkerung" value={newPlanet.population} name="population"
    //           onChange={(e) => { setNewPlanet({ ...newPlanet, population: e.target.value }); }} />
    //       </td>
    //     </tr>
    //     <button type="submit">hinzufügen</button>
    //     <table>
    //       <th>Namhafte Bewohner1</th>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Name" value={newResident1.name} name="resident-name"
    //             onChange={(e) => { setNewResident1({ ...newResident1, name: e.target.value }); }} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Geburtsjahr" value={newResident1.birthYear} name="resident-birthYear"
    //             onChange={(e) => { setNewResident1({ ...newResident1, birthYear: e.target.value }); }} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Grösse(cm)" value={newResident1.height} name="resident-height"
    //             onChange={(e) => { setNewResident1({ ...newResident1, height: e.target.value }); }} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Gschlecht" value={newResident1.gender} name="resident-gender"
    //             onChange={(e) => { setNewResident1({ ...newResident1, gender: e.target.value }); }} />
    //         </td>
    //       </tr>
    //     </table>
    //     <table>
    //       <th>Namhafte Bewohner2</th>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Name" value={newResident2.name} name="resident-name"
    //             onChange={(e) => { setNewResident2({ ...newResident2, name: e.target.value }); }} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Geburtsjahr" value={newResident2.birthYear} name="resident-birthYear"
    //             onChange={(e) => { setNewResident2({ ...newResident2, birthYear: e.target.value }); }} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Grösse(cm)" value={newResident2.height} name="resident-height"
    //             onChange={(e) => { setNewResident2({ ...newResident2, height: e.target.value }); }} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="text" placeholder="Gschlecht" value={newResident2.gender} name="resident-gender"
    //             onChange={(e) => { setNewResident2({ ...newResident2, gender: e.target.value }); }} />
    //         </td>
    //       </tr>
    //     </table>
    //   </table>



    // </form >
  )
}

export default PlanetForm;