import React from 'react'
import styled from 'styled-components' 


const Selection = (props) => {
  const {pName,pMUpdateState, pOptions} = props;
  return (
    <ContSelect
            id={"i"+pName}
            name={pName}
            onChange={pMUpdateState}
          >
            {
              pOptions.map( (data, index) => (
                <option 
                  key={index} 
                  value={data.value}
                > 
                  {data.texto} </option>
              ))
            } 
      </ContSelect>
  )
}

export {Selection}

const ContSelect = styled.select`
    color: #fff;
    margin: 5px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 7px;
    width: 140px;
    font-size: 0.6em;
    padding: 3px 4px;
    background-color: #00000070;
`