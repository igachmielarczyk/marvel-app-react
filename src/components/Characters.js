import React, { useState, useEffect } from 'react';
import CharactersItem from './CharactersItem';

const Characters = () => {

    const hash= "29dadfca9169de829e614eb6fc172b5a";
    const publicKey="6e34c536c78ec4dcd7fcb0550815de3a";


    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharactes = async () => {
            const data = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
            const items = await data.json();

            setCharacters(items.data.results);
        }
        fetchCharactes();
    }, [hash])

    return (
        <div className="Characters container">
            <section className="contents">
                {characters.map(character => (
                    <CharactersItem key={character.id} character={character} />
                ))}
           </section>
        </div>
    )
}

export default Characters;
