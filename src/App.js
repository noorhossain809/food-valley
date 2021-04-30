import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dinner from './components/Dinner/Dinner';
import Lunch from './components/Lunch/Lunch';
import Breakfast from './components/Breakfast/Breakfast';


function App() {
  
  return (
    <div>
      
      <Router>
    <Header></Header>

       
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dinner">
          <Dinner></Dinner>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
        </Switch>
      
    </Router>
      
    </div>
  );
}

export default App;
