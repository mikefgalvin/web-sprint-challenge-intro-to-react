import React from 'react';
import styled from 'styled-components';

const Char = (props) => {
    const { characters } = props
 
  
    console.log('data', characters)


    return (
        <StyledChar>
            <CharTitle data-href="http://google.com/"> {characters.name} </CharTitle>
            <div>
                <div>
                    <TraitTitle>General Information</TraitTitle>
                    <StyledAppearance>
                        <h4> Birth:  {characters.birth_year} </h4>
                        <h4> Gender:  {characters.gender} </h4>
                    </StyledAppearance>
                </div>
                <div>
                    <TraitTitle>Appearance</TraitTitle>
                    <StyledAppearance>
                        <h4> Height:  {characters.height} </h4>
                        <h4> Mass:  {characters.mass} </h4>
                        <h4> Hair:  {characters.hair_color} </h4>
                        <h4> Skin:  {characters.skin_color} </h4>
                        <h4> Eyes:  {characters.eye_color} </h4>
                    </StyledAppearance>
                </div>
            </div>
        </StyledChar>
    )
}

const StyledChar = styled.div`
    background-color: black;
    color: white;
    opacity: .8;
    margin: 0 auto;
    padding-top: 1px;
   
`

const CharTitle = styled.h2`
    color: #FFE81F;
`
const TraitTitle = styled.h3`
    font-size: 1.2rem;
    text-decoration: underline;
`


const StyledAppearance = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;

`

export default Char;