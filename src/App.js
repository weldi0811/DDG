import React, {Component} from 'react';
import Home from './Home'
import Company from './Company'
import Community from './Community'
import Educational from './Educational'
import './App.css';

import Header from './Header'
import {BrowserRouter,Route} from 'react-router-dom'


class App extends Component{

  
  

  render(){
    return(
      <BrowserRouter>
        <Header />
        <Route path ='/' exact component={Home} />
        <Route path ='/company'exact component={Company} />
        <Route path ='/community'exact component={Community} />
        <Route path ='/educational'exact component={Educational} />
        

      </BrowserRouter>
        
      
    )
  }
}

export default App;
