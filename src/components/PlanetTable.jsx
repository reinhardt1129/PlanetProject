import { useState } from "react";
import { headers, sub_headers } from "../data/headers";

const Caret = ({ accessor, direction }) => {
  if (accessor !== "") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={direction}>
        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
      </svg>
    );
  }
  return
};

function PlanetTable({ planets }) {

  const [sort, setSort] = useState({ keyToSort: "name", direction: "asc" })

  function handleHeaderClick(header) {
    setSort({
      keyToSort: header,
      direction:
        header === sort.keyToSort ? sort.direction === "asc" ? "desc" : "asc" : "desc"
    })
  }

  function getSortedArray(arrayToSort) {
    if (sort.direction === "asc") {
      return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
    }
    return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
  }

  return (
    <table>
      <caption>Planetenliste</caption>
      <thead>
        <tr>
          <th></th>
          {
            headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header.accessor)}>
                <div className="header-container">
                  <span>{header.label}</span>
                  <Caret accessor={header.accessor} direction={sort.keyToSort === header.accessor ? sort.direction : "acs"} />
                </div>
              </th>
            ))
          }
        </tr>
        <tr>
          <th colspan={headers.length}></th>
          <th>{sub_headers.join(" / ")}</th>
        </tr>
      </thead>
      <tbody>
        {
          getSortedArray(planets).map((planet, index) => (
            <tr key={index}>
              <td class={"list icon " + planet.name.toLowerCase()}></td>
              <td class={"list"} key={planet.name}>{planet.name}</td>
              <td class={"list"} key={planet.diameter}>{planet.diameter}</td>
              <td class={"list"} key={planet.gravity}>{planet.gravity}</td>
              <td class={"list"} key={planet.terrain}>{planet.terrain}</td>
              <td class={"list"} key={planet.population}>{planet.population}</td>
              <td class={"list"} >
                <ul>
                  {
                    planet.residents.map((resident, index) => (
                      <li key={resident.name}>{resident.name + " (" + resident.birthYear + ")" + " / " + resident.height + " (cm) / " + resident.gender}</li>
                    ))
                  }
                </ul>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table >
  )
}

export default PlanetTable;
