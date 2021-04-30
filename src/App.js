import "./App.css";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Ayuda from "./components/Ayuda";
import Servicios from "./components/Servicios";
import Ubicacion from "./components/Ubicacion";
import Nosotros from "./components/Nosotros";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carusel from "./components/Carusel";
import PopularAndRecentBlogPost from "./components/blogs/PopularAndRecentBlogPosts";
import GoogleMaps from "components/GoogleMaps";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center minh-100">
          <div className="btn-group">
            <Link to="/" className="btn btn-dark">
              Inicio
            </Link>
            <Link to="/servicios" className="btn btn-dark">
              Servicios
            </Link>
            <Link to="/nosotros" className="btn btn-dark">
              Nosotros
            </Link>
            <Link to="/ubicacion" className="btn btn-dark">
              Ubicacion
            </Link>
            <Link to="/ayuda" className="btn btn-dark">
              Ayuda
            </Link>
            <Link to="/contacto" className="btn btn-dark">
              Contacto
            </Link>
            <Link to="/login" className="btn btn-dark">
              Login
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/" exact>
            <center>
              <h1>Consult-Ing</h1>
              <Carusel />
            </center>
          </Route>
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/ubicacion" exact component={GoogleMaps} />
          <Route path="/ayuda" exact component={Ayuda} />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/login" exact component={Login} />
        </Switch>{" "}

      </div>
     
    </Router>

  );
}

export default App;
