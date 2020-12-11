import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character'



const URL = 'https://swapi.dev/api/people/';
const charNum = 1;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters]= useState('');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const newArray = [
  //   characters[0],
  //   characters[1],
  //   characters[2],
  //   characters[3],
  //   characters[4],
  //   characters[5],
  //   characters[6],
  //   characters[7],
  //   characters[8],
  //   characters[9],
  //  ]

  //  console.log('new array', newArray);
  

  useEffect( () => { 
      axios
      .get(`${URL}1`)
      .then( (res) => {
        setCharacters(res.data);
        console.log(characters);
      })
      .catch( (err) => {
        // debugger;
      })
  }, []);

//   useEffect( () => { 
//     const fetchChar = (charID) => {
//     axios
//     .get(`${URL}`)
//     .then( (res) => {
//       setCharacters(res.data.map(char => {
//         return charID === char.id
//         ?{...char}
//         : char;
//       }));
//       console.log(characters);
//     })
//     .catch( (err) => {
//       debugger;
//     })
//   }
//   fetchChar();
// }, []);



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        // newArray.map(char => {
        //   return <Character key={char.name} characters={char}/>;
        // })
      }   
      <Character characters={characters}/>
      
    </div>
  );
}

export default App;
