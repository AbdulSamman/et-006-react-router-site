import { NavLink, Routes, Route, Outlet } from "react-router-dom";
// import { PageCheckpointCharlie } from "./PageCheckpointCharlie";
// import { PageBrandenburgGate } from "./PageBrandenburgGate";
// import { PageUnterDenLinden } from "./PageUnterDenLinden";

export const PageMitte = () => {
  return (
    <>
      <p>welcome to the Mitte page</p>
      <nav>
        <NavLink to="checkpointCharlie">CheckpointCharlie</NavLink>
        <NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
        <NavLink to="unterDenLinden">Unter Den Linden</NavLink>
      </nav>
      {/* <Routes>
        <Route path="checkpointCharlie" element={<PageCheckpointCharlie />} />
        <Route path="brandenburgGate" element={<PageBrandenburgGate />} />
        <Route path="unterDenLinden" element={<PageUnterDenLinden />} />
      </Routes> 
      oder mit Outlet
      */}
      <Outlet />
    </>
  );
};
