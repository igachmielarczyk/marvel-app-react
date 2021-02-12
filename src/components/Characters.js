import React, { useState, useEffect } from 'react';
import CharactersItem from './CharactersItem';
import Search from './Search';

const Characters = () => {

    const hash= "29dadfca9169de829e614eb6fc172b5a";
    const publicKey="6e34c536c78ec4dcd7fcb0550815de3a";


    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchCharactes = async () => {
            if(query==='') {
                const data = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
                const items = await data.json();
    
                setCharacters(items.data.results);

            } else {
                const data = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`);
                const items = await data.json();
    
                setCharacters(items.data.results);
            }
        }
        fetchCharactes();
    }, [query])

    return (
        <div className="Characters container">
            <Search search={(q)=>setQuery(q)} /> 
            <section className="contents">
                {characters.map(character => (
                    <CharactersItem key={character.id} character={character} />
                ))}
           </section>
        </div>
    )
}

export default Characters;
