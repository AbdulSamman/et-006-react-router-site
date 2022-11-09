// Outlet in PageSpain
import { useOutletContext } from "react-router-dom";

export const PageCity = () => {
  const city: any = useOutletContext();

  return (
    <div className="city">
      <img src={`/images/cities/${city.idCode}.jpg`} />
      <div className="info">
        <div className="name">{city.name}</div>
        <div className="description">{city.description}</div>
      </div>
    </div>
  );
};
