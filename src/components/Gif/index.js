import React from 'react';
import { Link } from 'wouter';
import './styles.css';

function Gif({ title, id, url }) {
    
    return (
        <div  className="Gif">
            <Link href={ `/gif/${id}` } className='Gif-link'>
                <h4>{title}</h4>
                <img alt="#" src={url} loading='lazy'/>
            </Link>
        </div> 
    );
}

export default Gif;