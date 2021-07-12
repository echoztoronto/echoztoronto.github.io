import { BrowserRouter, Route, Switch }  from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Navbars from "./components/Navbars";

function App() {
  return (
    <BrowserRouter >
    <Navbars />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' exact/>
        <Route component={Project} path='/project' exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
