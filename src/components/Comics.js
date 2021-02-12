import React, { useState, useEffect } from 'react';
import ComicsItem from './ComicsItem';

const Comics = () => {

    const hash= "29dadfca9169de829e614eb6fc172b5a";
    const publicKey="6e34c536c78ec4dcd7fcb0550815de3a";


    const [comics, setComics] = useState([]);

    useEffect(() => {
        const fetchComics = async () => {
            const data = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`);
            const items = await data.json();
            setComics(items.data.results);
        }
        fetchComics();
    }, [hash])

    // console.log(comics[3].series.resourceURI);
    return (
        <div className="Comics container">
            <section className="contents">
                {comics.map(comicItem => (
                    <ComicsItem  key={comicItem.id} comicItem={comicItem} />
                ))}
           </section>
        </div>
    )
}

export default Comics;
