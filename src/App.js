import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import Context from './context/StaticContext';

import { Link, Route } from "wouter";
import  { GifsContextProvider }  from './context/GifsContext';


function App() {

  return (
    <Context.Provider value={{ 
      name: 'cesc',
      practicanding: true
    }} >
      <div className="App">
        <section className="App-content">

          <Link to="/">
            <h1>GIFFER</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />

          </GifsContextProvider>
          
                
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
