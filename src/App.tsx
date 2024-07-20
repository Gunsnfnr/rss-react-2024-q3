import { Outlet, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import CharacterCard from './components/CharacterCard/CharacterCard';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main />
            <Outlet />
          </>
        }
      >
        <Route path="card/:id" element={<CharacterCard />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
export default App;
