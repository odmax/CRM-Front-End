import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from "./pages/Authentication/SignIn"
import SignUp from "./pages/Authentication/SignUp"
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
      {/* <Route
          path='/'
          element={
            <>
              <PageTitle title="SignIn Hsieh AI" />
              <SignIn />
            </>
          }
        />
      <Route
          path='/signup'
          element={
            <>
              <PageTitle title="SignUp Hsieh AI" />
              <SignUp />
            </>
          }
        /> */}
        <Route
          path='/'
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
