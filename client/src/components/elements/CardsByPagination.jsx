import React from 'react'
import Card from '../Card';
import styled from "styled-components";

const CardsByPagination = (props) => {
    const {pAPieceOfTotalCards, pBoleanLoading} = props;

    if ( pBoleanLoading) {
        return <h2>LOADING ...</h2>
    }

  return (
    <CardsConatiner >
        { 
            pAPieceOfTotalCards && pAPieceOfTotalCards.map(pCountry =>{
                return (
                  <Card 
                    pImagen = {pCountry.image}
                    pNombre = {pCountry.name}
                    pContinente = {pCountry.continent}
                    pId = {pCountry.id}
                    key = {pCountry.id}
                  />
                )})
        }
    </CardsConatiner>
  )
}

export default CardsByPagination

const CardsConatiner = styled.section`
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
 
`

/*/ Tarjeta * /
  .target .target_body .temperature{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }
  //  Posicionamiento en grids * /
  .target .target_body .temperature .c1{
    grid-area: 1 / 1 
  }
  
  .target .target_body .temperature .c2{
    grid-area: 2 / 1 
  }
  
  .target .target_body .temperature .c3{
    grid-area: 1 / 2 
  }
  
  .target .target_body .temperature .c4{
    grid-area: 2 / 2 
  }
*/