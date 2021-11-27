import './Components/style.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Studentlist from './Components/Studentlist';
import Studentdetails from './Components/Studentdetails';
import Contact from './Components/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
    <Home />
    </Route>

    <Route exact path="/studentlist">
      <Studentlist/>
      </Route>
      
      <Route exact path="/studentdetails/:id/:name/:cgpa">
        <Studentdetails />
        </Route>

      <Route exact path="/contact">
      <Contact/>
      </Route>
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
