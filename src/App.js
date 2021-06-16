import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Signup from './components/Pages/SignUp';
import Producto from './components/Pages/Producto';
import Carrito from './components/Pages/Carrito';
import Bebidas from './components/Pages/Bebidas';
import Dulces from './components/Pages/Dulces';
import Fibras from './components/Pages/Fibras';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/producto'component={Producto} />
        <Route path='/sign-up'component={Signup} />
        <Route path='/carrito'component={Carrito} />
        <Route path='/bebidas'component={Bebidas} />
        <Route path='/dulces'component={Dulces} />
        <Route path='/fibras'component={Fibras} />
      </Switch>
      <Footer/>
    </Router>    
  );
}

export default App;
