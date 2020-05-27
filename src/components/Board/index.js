import React from 'react';
import Gif from '../Gif';
import './styles.css';


function Board( props ) {

    const { gifs } = props;
    
    const handleBoardOfGifs = () => {
        
        const data =  gifs.map((gif, index ) => {
            const {title, id, url} = gif;
            return <Gif key={index} title={title} id={id} url={url} />
        });

        return data;
    };


    return (
        <div className="Board">
            {handleBoardOfGifs()}
        </div>
    )
}

export default Board;