import React from 'react';
import './Gif.css';

function Gif({ title, id, url }) {
    
    return (
        <div>
            <a href={ `#${id}` } className='Gif'>
                <div key={id}>
                    <h4>{title}</h4>
                    <img alt="#" src={url} className="gif-img" />
                </div>
            </a>
        </div> 
    );
}

export default Gif;