import { Outlet, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

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
        <Route path="card/:id" element={<CharacterDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
export default App;
