import React, {useEffect, useState} from 'react';
import '../App.css';


import MoviesItems from './MoviesItems';

const Movies = () => {

    useEffect(() => {
        // fetchMovies();

        
        const fetchMovies = async () => {
            const data = await fetch('https://mcuapi.herokuapp.com/api/v1/movies?{page=1?limit=10?columns=title,release_date?order=chronology,DESC?filter=phase=1}');

            const items = await data.json();
            // console.log(items.data);
            setMovies(items.data);
        }

        fetchMovies();

    }, []);
    

    const [movies, setMovies] = useState([]);

    // odkometowac do sercha też dziła

    // const fetchMovies = async () => {
    //     const data = await fetch('https://mcuapi.herokuapp.com/api/v1/movies?{page=1?limit=10?columns=title,release_date?order=chronology,DESC?filter=phase=1}');

    //     const items = await data.json();
    //     // console.log(items.data);
    //     setMovies(items.data)
       
    // }
    console.log(movies);

    return (
        <div className="Movies container">
            <section className="contents">
             {movies.map(movie => (
                 <MoviesItems key={movie.id} movie={movie} />
             ))}
            </section>
        </div>
    )
}

export default Movies;
