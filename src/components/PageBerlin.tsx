import { NavLink, Routes, Route } from "react-router-dom";
import { PageTiergarten } from "./PageTiergarten";
import { PageSteglitz } from "./PageSteglitz";
import { PageMitte } from "./PageMitte";
import { PageCheckpointCharlie } from "./PageCheckpointCharlie";
import { PageBrandenburgGate } from "./PageBrandenburgGate";
import { PageUnterDenLinden } from "./PageUnterDenLinden";
export const PageBerlin = () => {
  return (
    <>
      <p>welcome to the Berlin page</p>
      <nav>
        <NavLink to="tierGarten">Tiergarten</NavLink>
        <NavLink to="stegLitz">Steglitz</NavLink>
        <NavLink to="mitte">Mitte</NavLink>
      </nav>
      {/* positionen von routes kann man beliebig plazieren */}
      <Routes>
        <Route path="tierGarten" element={<PageTiergarten />} />
        <Route path="stegLitz" element={<PageSteglitz />} />
        <Route path="mitte" element={<PageMitte />}>
          {/* mitte ohne /* geht da die auf der selben seite sind */}
          <Route path="checkpointCharlie" element={<PageCheckpointCharlie />} />
          <Route path="brandenburgGate" element={<PageBrandenburgGate />} />
          <Route path="unterDenLinden" element={<PageUnterDenLinden />} />
        </Route>
      </Routes>
    </>
  );
};
