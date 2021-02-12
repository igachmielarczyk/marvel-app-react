import React, {useEffect, useState} from 'react';

import './MovieTrailer.css';

const MovieTrailer = () => {

    useEffect(() => {
        fetchMovies();
    }, []);

    const [trailers, setTraliers] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch('https://mcuapi.herokuapp.com/api/v1/movies?{page=1?limit=10?columns=title,release_date?order=chronology,DESC?filter=phase=1}');

        const items = await data.json();
        console.log(items.data);
        setTraliers(items.data)
       
    }
    

    return (

        <div className="trailer contener">
            {trailers.map(trailer => (
                <div className="trailer-item">
                    <h1>{trailer.title}</h1>
                    <iframe width="500" height="394" src={trailer.trailer_url} ></iframe>
                </div>
     
            ))}
         
        </div>
    )
};

export default MovieTrailer;
