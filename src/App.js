import React, {useState} from 'react';
import './App.css';

import Board from './components/Board';
import { Link, Route } from "wouter";


function App() {

  const [keyword, setKeyword] = useState('azul')


  return (
    <div className="App">
      <section className="App-content">

        <h1>GIFFER</h1>
        <Link href="/gif/pandas">Gifs de pandas</Link>
        <Link href="/gif/rick y morty">Gifs de rick y morty</Link>
        <Link href="/gif/jordan">Gifs Jordan</Link>
        <Link href="/gif/star wars">Gifs Star wars</Link>

        <Route component={Board} path='/gif/:keyword' />
       
      </section>
    </div>
  );
}

export default App;
