import './App.css';
import 'bootstrap';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import ScrollTop from './components/ScrollTop';
import Gallery from './components/Gallery';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
      </Switch>
      <ScrollTop />
    </Router>
   
  );
}

export default App;
