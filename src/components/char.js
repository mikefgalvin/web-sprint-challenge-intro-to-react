// Write your Character component here
// import React from 'react';
// import styled from 'styled-components';

// const Char = (props) => {
//     const { char } = props
 
  
//     console.log('data', char)


//     return (
//         <StyledChar>
//             <CharTitle> {char.name} </CharTitle>
//             <div>
//                 <div>
//                     <TraitTitle>General Information</TraitTitle>
//                     <StyledAppearance>
//                         <h4> Birth:  {char.birth_year} </h4>
//                         <h4> Gender:  {char.gender} </h4>
//                     </StyledAppearance>
//                 </div>
//                 <div>
//                     <TraitTitle>Appearance</TraitTitle>
//                     <StyledAppearance>
//                         <h4> Height:  {char.height} </h4>
//                         <h4> Mass:  {char.mass} </h4>
//                         <h4> Hair:  {char.hair_color} </h4>
//                         <h4> Skin:  {char.skin_color} </h4>
//                         <h4> Eyes:  {char.eye_color} </h4>
//                     </StyledAppearance>
//                 </div>
//             </div>
//         </StyledChar>
//     )
// }

// const StyledChar = styled.div`
//     background-color: black;
//     color: white;
//     opacity: .7;
//     width: 50%;
//     margin: 0 auto;
//     padding-top: 1px;
// `

// const CharTitle = styled.h2`
//     color: #FFE81F;
// `
// const TraitTitle = styled.h3`
//     font-size: 1.2rem;
//     text-decoration: underline;
// `


// const StyledAppearance = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     width: 80%;
//     margin: 0 auto;

// `

// export default Char;