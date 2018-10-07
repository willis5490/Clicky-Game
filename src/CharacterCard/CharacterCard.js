import React from "react";
import "../Body/Body.css";


const CharacterCard = props => (
    <li className="pCards">
        <div className="uk-card uk-card-body">
            <a className='cardImage' onClick={props.theShuffle}><img className='cardImage' alt={props.image} src={props.image}></img></a>
        </div>
    </li>
)

export default CharacterCard