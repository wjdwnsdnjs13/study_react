/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from "prop-types";


const foodILike = [
    {
        id: 3,
        name: "Kimchi",
        image: "img/kimchi.png"
    },
    {
        id: 4,
        name: "Sam",
        image: "img/Sam.hpg",
        rating: 3.6
    },
    {
        id: 5,
        name: "Bibim",
        image: "img/Bibim.jpg",
        rating: 3.7
    },
    {
        id: 6,
        name: "Don",
        image: "img/Don.jpg",
        rating: 3.8
    },
]
function Food({name, picture, rating}){
    return (<div><h1>I like {name}</h1>
            <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} /></div>);
}
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}
function study({day, gita, explain}){
    return <h1>{day} {gita} {explain}</h1>;
}

function App() {

  return (
    <div>
          {foodILike.map(menu => <Food key ={menu.id} name={menu.name} picture={menu.image} rating={menu.rating} />)}
    </div>
  );
}

export default App;
