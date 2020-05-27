import {useEffect, useState, useContext} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

function useGifs ({ keyword } = {keyword: null}) {

    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext)
    // const [gifs, setGifs] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        //recuperamos la keyword del localstorage
        const lastKeyword = keyword || localStorage.getItem('lastKeyword') || 'random';

        getGifs({keyword : lastKeyword})
        .then(gifs => {
            setGifs(gifs);
            setLoading(false);
            //guardamos la keyword en localStorage
            localStorage.setItem('lastKeyword',  keyword);
        })
    }, [keyword, setGifs]);

    return [loading, gifs]
}

export default useGifs;