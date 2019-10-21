import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import Characters from './Characters'
import Header from './Header'
import {BrowserRouter,Route} from 'react-router-dom'


class App extends Component{

  
  

  render(){
    return(
      <BrowserRouter>
        <Header />
        <Route path ='/' exact component={Movies} />
        <Route path ='/movies/:movies_id' component={MovieDetail} />
        <Route path ='/characters' component={Characters} />

      </BrowserRouter>
        
      
    )
  }
}

export default App;
