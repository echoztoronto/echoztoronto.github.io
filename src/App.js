import { HashRouter, Route, Switch }  from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Navbars from "./components/Navbars";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/"}>
    <Navbars />
      <Switch>
        <Route component={About} path='/about' exact/>
        <Route component={Project} path='/project' exact/>
        <Route component={Home} path='/' exact />
      </Switch>
    </HashRouter>
  )
}

export default App;
