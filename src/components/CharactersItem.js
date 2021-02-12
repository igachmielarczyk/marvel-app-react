import React from 'react';

const CharactersItem = ({character}) => {
    return (
        <div className="content">
            <div className="content-inner">
                <div className="content-front">
                    <img src={character.thumbnail.path + "/portrait_xlarge.jpg"} alt=""/>
                </div>
                <div className="content-back">
                    <h1>{character.name}</h1>
                    <ul>
                        <li>
                            <strong>Description: </strong>{character.description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharactersItem;
