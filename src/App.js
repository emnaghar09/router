import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './components/profile';
import {sweet} from './components/array';
import About from './components/about';
import Home from './components/home';
import Footer from './components/footer';
import Details from './components/Details';
import Contact from './components/contact';
import Products from './components/products';
import {useState} from 'react';

function App() {
  const [newSweet,setNewSweet] = useState(sweet)
  const handlerSweet = (data) => setNewSweet({...newSweet,data})
  return (
    <div className="App">

      <Router>
        <Navbar />
        <div className="middlepart">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Products" component={Products} />
        <Route path="/About" render ={(props)=><About {...props} handlerSweet={handlerSweet} newSweet={newSweet} />} />
        <Route path='/Details/:id' render ={(props)=><Details {...props} Liste={sweet} />} />
        <Route path="/Contact" component={Contact} />
        </Switch>
        </div>
        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
