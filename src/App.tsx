import { Outlet, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound/NotFound";
import CharacterCard from "./components/CharacterCard/CharacterCard";

const App = () => {
  return (
    <Routes>
      <Route
        path="/main"
        element={
          <>
            <Search />
            <Outlet />
          </>
        }
      >
        <Route path="card/:id" element={<CharacterCard />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default App;
