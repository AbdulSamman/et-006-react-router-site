import { NavLink, Routes, Route } from "react-router-dom";
import { PageParis } from "./PageParis";
import { PageBordeaux } from "./PageBordeaux";
export const PageFrance = () => {
  return (
    <>
      <p>welcome to the France page</p>
      <nav>
        <NavLink to="paris">Paris</NavLink>
        <NavLink to="bordeaux">Bordeaux</NavLink>
      </nav>
      <Routes>
        <Route path="paris" element={<PageParis />} />
        <Route path="bordeaux" element={<PageBordeaux />} />
      </Routes>
    </>
  );
};
