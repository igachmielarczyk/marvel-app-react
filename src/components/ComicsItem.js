import React from 'react';

const ComicsItem = ({comicItem}) => {
    return (
        <div className="content">
            <div className="content-inner">
                <div className="content-front">
                    <img src={comicItem.thumbnail.path + "/portrait_xlarge.jpg"} alt=""/>
                </div>
                <div className="content-back">
                    <h1>{comicItem.title}</h1>
                    <ul>
                        <li>
                            <strong>Description: </strong>{comicItem.description}
                        </li>
                        <li>
                            <strong>Series: </strong>{comicItem.series.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ComicsItem;
