import React from 'react';
import Board from '../../components/Board/index';
import useGifs from '../../hooks/useGifs';


function SearchResults({params}) {

    const { keyword } = params;
    const [ loading, gifs ]  = useGifs( {keyword} );
    
    return (
        <div>
            { loading ? <h3>Cargando ...</h3> : <Board gifs={gifs} /> }
        </div>
    )
}

export default SearchResults;