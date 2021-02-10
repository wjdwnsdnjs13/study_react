/* eslint-disable */
import React, { useState } from 'react';

function Food({fav}){
    console.log(fav)
    return <h1>I like {fav}</h1>;
}
function study({day, gita, explain}){
    return <h1>{day} {gita} {explain}</h1>;
}

function App() {

  return (
    <div>
          <h1>hellowaaa</h1>
          <Food fav="kimchi"/>
          <Food fav="ramen"/>
          <Food fav="samgiopsal"/>
          <Food fav="chukumi"/>
          <study day="0210" gita="https://ko.javascript.info/import-export#ref-4122" explain="as와 default, import와 export에 대한 설명이 된 사이트" />
    </div>
  );
}

export default App;
