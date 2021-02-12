import React, { useState, useEffect } from 'react';
import ComicsItem from './ComicsItem';
import Search from './Search';

const Comics = () => {

    const hash= "29dadfca9169de829e614eb6fc172b5a";
    const publicKey="6e34c536c78ec4dcd7fcb0550815de3a";

    const [comics, setComics] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchComics = async () => {
            if(query===''){
                const data = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`);
                const items = await data.json();
                setComics(items.data.results);
            } else {
                const data = await fetch(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`);
                const items = await data.json();
                setComics(items.data.results);
            }

        }
        fetchComics();
    }, [query])

    return (
        <div className="Comics container">
            <Search search={(q) => setQuery(q)} />
            <section className="contents">
                {comics.map(comicItem => (
                    <ComicsItem  key={comicItem.id} comicItem={comicItem} />
                ))}
           </section>
        </div>
    )
}

export default Comics;
