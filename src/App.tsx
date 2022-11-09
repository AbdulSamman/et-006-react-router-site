import "./App.scss";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageGermany } from "./components/PageGermany";
import { PageFrance } from "./components/PageFrance";
import { PageSpain } from "./components/PageSpain";
import { PageStart } from "./components/PageStart";
import { Page404 } from "./components/Page404";
import { PageCity } from "./components/PageCity";
function App() {
  return (
    <div className="App">
      {/* NavLink besser als a damit die seite nicht noch mal geladen wird, da um single page application geht (CSS wird als a abgerufen) */}
      <h1>
        <NavLink to="/">Travel Info Site</NavLink>
      </h1>
      <nav>
        <NavLink to="germany">Germany</NavLink>
        <NavLink to="france">France</NavLink>
        <NavLink to="spain">Spain</NavLink>
      </nav>
      <Routes>
        {/* germany/*  wenn wir nested ROUTES/NAV haben damitdie funktionieren /* */}
        <Route path="germany/*" element={<PageGermany />} />
        <Route path="france/*" element={<PageFrance />} />
        <Route path="spain" element={<PageSpain />}>
          <Route path=":idCode" element={<PageCity />} />
        </Route>
        {/* beim laden pageGermany öffnen 
        <Route path="/" element={<Navigate to="germany" replace />} />
        */}
        <Route path="/" element={<PageStart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
