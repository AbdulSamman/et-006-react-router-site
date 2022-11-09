import { useLocation } from "react-router-dom";

export const Page404 = () => {
  const location = useLocation();
  return (
    <div className="page404">
      <h2>
        Page <code>{location.pathname}</code> dose not exist.
      </h2>
    </div>
  );
};
