import React, {useState, useEffect}  from 'react';
import getGifts from '../services/getGifs';

import Gif from './Gif';

function Board({ params }) {

    const { keyword } = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() =>{
      console.log('effect successful');
      setLoading(true);
      getGifts({ keyword })
        .then(gifs => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword])
    
    if(loading) return <i>Cargando ...</i>

    return <div>
        {
            gifs.map((gif, index ) => 
                <Gif 
                key={index} 
                title={gif.title} 
                id={gif.id} 
                url={gif.url}
                />
            )

        }
        </div>
    

}

export default Board;