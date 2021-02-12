import React from 'react';


import {Link} from 'react-router-dom';


const MoviesItems = ({movie}) => {
    return (
        <div className="content">
            <div className="content-inner">
                <div className="content-front">
                    <img src={movie.cover_url} alt=""/>
                </div>
                <div className="content-back">
                    <h1>{movie.title}</h1>
                    <ul>
                        <li>
                            <strong>Dercription: </strong>{movie.overview}
                        </li>
                        <li>
                            <strong>Directed by: </strong>{movie.directed_by}
                        </li>
                        <li>
                            <strong>Release date: </strong>{movie.release_date}
                        </li>
                    </ul>
                    <button className="btn">
                        <Link to="/trailer">Watch the trailer</Link>
                    </button>
                </div>
            </div> 
        </div>
    );
}

export default MoviesItems;
