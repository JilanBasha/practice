import logo from './logo.svg';
import './App.css';
import './GlobalStyles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import A from './components/Question1/A';
import Q2 from './components/Question2/Q2';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/question1" component={A}/>
            <Route exact path="/question2" component={Q2}/>
          </Switch>
        </Router>  
      </div>
    </div>
  );
}

export default App;
