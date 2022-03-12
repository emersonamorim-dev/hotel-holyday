import React from 'react';
import loadingGif from "../images/gif/loading-arrow.gif"

function Loading(props) {
    return (
        <div className="loading">
            <h4>carregamento de dados dos quartos ...</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    );
}

export default Loading;