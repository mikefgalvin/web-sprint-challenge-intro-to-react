// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import Char from './char';

const Character = (props) => {
    const { characters } = props
 
    // if (!props.dailyPhoto) return <StyledLoading>Loading...</StyledLoading>;

    // let charactersArray = []
    // charactersArray.push(characters);
    // console.log('c array', charactersArray);

    console.log('data', characters)


    // return (
    // <div className='charactcharactersrs'>
    //     <StyledChar>
    //         <CharTitle> {characters.name} </CharTitle>
    //         <div>
    //             <div>
    //                 <TraitTitle>General Information</TraitTitle>
    //                 <StyledAppearance>
    //                     <h4> Birth:  {characters.birth_year} </h4>
    //                     <h4> Gender:  {characters.gender} </h4>
    //                 </StyledAppearance>
    //             </div>
    //             <div>
    //                 <TraitTitle>Appearance</TraitTitle>
    //                 <StyledAppearance>
    //                     <h4> Height:  {characters.height} </h4>
    //                     <h4> Mass:  {characters.mass} </h4>
    //                     <h4> Hair:  {characters.hair_color} </h4>
    //                     <h4> Skin:  {characters.skin_color} </h4>
    //                     <h4> Eyes:  {characters.eye_color} </h4>
    //                 </StyledAppearance>
    //             </div>
    //         </div>
    //     </StyledChar>
    // </div>

    // )

    return (
        <CharactersDiv className='charactcharactersrs'>
                <Char characters={characters} />
        </CharactersDiv>
    )
}

const CharactersDiv = styled.div`
    max-width: 46%;
    padding: 2%;
`



export default Character;