import { NavLink, useParams, Outlet } from "react-router-dom";
//params für path=":id" gibt uns object von id zurück

import cities from "../data/cities.json";

export const PageSpain = () => {
  //const params = useParams();
  //console.log(params);
  // const { id } = useParams();

  const { idCode } = useParams();

  const city = cities.find((m) => String(m.idCode) === String(idCode));

  return (
    <>
      <p>welcome to the Spain page</p>
      <p className="cityChoices">
        There are {cities.length} cities to visit:{" "}
        {cities.map((city, index) => {
          return (
            <span key={city.id}>
              <span className="cityLink">
                <NavLink to={String(city.idCode)}>{city.name}</NavLink>
              </span>
              {/* letzte komma entfernen */}
              {cities.length - 1 > index && <span>, </span>}
            </span>
          );
        })}
      </p>
      {/*  <p>display city {id}</p> */}
      <Outlet context={city} />
    </>
  );
};
