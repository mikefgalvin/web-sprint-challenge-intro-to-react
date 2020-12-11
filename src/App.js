import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character'



const URL = 'https://swapi.dev/api/people/';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters]= useState([]);
  const [nextURL, setNextURL] = useState(URL);
  const [loading, setLoading] = useState(true);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => { 
    if (loading) {
      axios
      .get(nextURL)
      .then( (res) => {
        // setCharacters((c) => {
        //   console.log(c)
        //   return c.concat(res.data.results)
        // });
        setCharacters([...characters.concat(res.data.results)])
        setNextURL(res.data.next);
      })
      .catch( (err) => {
        console.log(err)
      })
    } 
      setLoading(false)
  }, [loading]);


//   const people = [];

//   useEffect( () => { 
//    URLS.map((url)=>  {
//     axios
//     .get(url)
//     .then( (res) => {
//       people.push(res.data)
//       setCharacters(people);
//       // console.log(n);
//     })
//     .catch( (err) => {
//       // debugger;
//     })
//    })
// }, []);



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(characters => {
          return <Character key={characters.name} characters={characters}/>;
        })
      }   
      <button onClick={() => setLoading(true)}>Load More</button>
      {/* <Character characters={characters}/> */}
      
    </div>
  );
}

export default App;
