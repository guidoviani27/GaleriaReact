
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paraiso from './components/Paraiso';
import Isla from './components/Isla';
import Cielo from './components/Cielo';
import Selva from './components/Selva';
import Rocas from './components/Rocas';

import Navegacion from './components/Navegacion';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Galeria</h1>
        </div>
      <Route path="/Paraiso" component={Paraiso} />
      <Route path="/Isla" component={Isla} />
      <Route path="/Cielo" component={Cielo} />
      <Route path="/Selva" component={Selva} />
      <Route path="/Rocas" component={Rocas} />
      

      <Navegacion />
    </Router>
  );
}

export default App;
