import { Route, BrowserRouter as Router  , Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./feature/page/StartingPage/LoginPage";
import RegisterPage from "./feature/page/StartingPage/RegisterPage";

function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path='/' element={<SiteLayout />}> */}
        {/* <Route index element={<ProtectedRoute component={Home} />} /> */}
        {/* <Route
          path='profile'
          element={<ProtectedRoute component={Profile} />}
        /> */}
        <Route path="" element={<LoginPage />} />
        <Route path='signup' element={<RegisterPage />} />
      {/* </Route> */}
    </Routes>
  </Router>
  );
}

export default App;
