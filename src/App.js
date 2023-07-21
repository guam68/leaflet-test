import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from 'pages/Map';
import Home from 'pages/Home'
import Nav from "./components/Nav";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import PrivateRoute from "utils/PrivateRoute";
import keycloak from "./Keycloak";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/map"
              element={
                <PrivateRoute>
                  <Map />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  )
}

export default App;
