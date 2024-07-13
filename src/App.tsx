import { Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Search />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default App;
