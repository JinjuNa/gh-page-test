import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Trainer from './pages/Trainer';
import Program from './pages/Program';
import Education from './pages/Education';
import SnsBar from './pages/SnsBar';
import Mask from './components/Mask';

function App() {

  const [mask,setMask] = useState(false);

  return (
    <div className="App">      
      { mask && (
         <Mask/>
      )}    
      <Header onShowMask={()=>setMask(true)} onHideMask={()=>setMask(false)}/>
      <SnsBar />
      <Router>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/trainer' component={Trainer}/>
            <Route path='/program' component={Program}/>
            <Route path='/education' component={Education}/>
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
