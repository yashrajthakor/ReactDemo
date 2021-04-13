import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = ()=> {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/service" component={Service} />
      <Route path="/login" component={Login} />
      <Redirect to="/"/>
    </Switch>
    <Footer/>     
    </>
  );
}

export default App;
