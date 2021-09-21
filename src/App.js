import './App.css';
import 'bootstrap';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import ScrollTop from './components/ScrollTop';
import Gallery from './components/Gallery';
import {useState,useEffect} from "react"



function App() {
  const [loader,setloader]=useState(true);
  const [content,setcontent]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
       setloader(false);
       setcontent(true);
    },2000);

  },[]);

  return (
    <div>
    { loader && <h1 style={{fontWeight:'bold'}}>Loading...</h1>}
    {
      content && <Router>
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
    }
    </div>
  );
}

export default App;
