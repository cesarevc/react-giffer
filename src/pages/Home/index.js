import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import useGifs from '../../hooks/useGifs';
import Board from '../../components/Board';


const POPULAR_GIFS = ["Matrix", "Mexico", "Elon Musk"]


function Home() {

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const [ loading, gifs ]  = useGifs();


    const handlePopularGifs = () => {
        const popularGifs = POPULAR_GIFS.map((popularGif) => {
                return (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                )
        })
        
        return popularGifs
    };

    const handleSubmit = (e) => {
        //cancela la accion por defecto
        e.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`);

    };

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif ..." />
                <button>Buscar</button>
            </form>
            <div>
                <h3 className="App-title">{
                    localStorage.getItem('lastKeyword') ? 'Última búsqueda' : 'Random gifs'
                }
                </h3>
                <Board gifs={gifs} />
            </div>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {handlePopularGifs()}
            </ul>
        </div>
    )
}
export default Home;