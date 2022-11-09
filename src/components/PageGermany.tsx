import { NavLink, Routes, Route } from "react-router-dom";
import { PageHamburg } from "./PageHamburg";
import { PageHannover } from "./PageHannover";
import { PageBerlin } from "./PageBerlin";
export const PageGermany = () => {
  return (
    <div>
      <p>welcome to the Germany page</p>
      <p>
        Today please look at events going on at the{" "}
        <NavLink to="/germany/berlin/mitte/brandenburgGate">
          Brandenburg Gate.
        </NavLink>
      </p>
      <nav>
        <NavLink to="hamburg">Hamburg</NavLink>
        <NavLink to="hannover">Hannover</NavLink>
        <NavLink to="berlin">Berlin</NavLink>
      </nav>
      <Routes>
        <Route path="hamburg" element={<PageHamburg />} />
        <Route path="hannover" element={<PageHannover />} />
        <Route path="berlin/*" element={<PageBerlin />} />
      </Routes>
    </div>
  );
};
