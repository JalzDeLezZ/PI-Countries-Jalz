import React from 'react'
import styled from "styled-components";

const RButtonGroup = (props) => {
  const {pId, pLabel,pValue ,pName, pMOnClickRbt} = props
   
  return (
    <ContChecks>
        <Label htmlFor={pId}>{pLabel}</Label>
        <input 
            type="radio" id={pId} 
            onClick={pMOnClickRbt}
            value={pValue} 
            name={pName} 
        />
    </ContChecks>
  )
}

const CSelect = (props) => {
  const {pName,pMUpdateState, pAOptions} = props;

  return (
    <ContSelect
        id={"i"+pName}
        name={pName}
        onChange={pMUpdateState}
    >
        {
        pAOptions.map( (data, index) => (
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
 
export {
    RButtonGroup,
    CSelect
}
 
//================================STYLES===============================
const ContChecks = styled.div`
    margin: 0 7px;
    display: flex;
    align-items: center;
    label{
        margin-right: 7px;
    }
`

const Label = styled.label`
    color: white;
    font-weight: bold;
` 
/* const Select = styled.select`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    outline: none;
    &:focus {
        box-shadow: 3px 0px 40px rgba(163,163,163, 0-4);
        border : 3px solid red
    }
` */

const ContSelect = styled.select`
    color: black;
    height: 45px;
    width: 100%;
    outline: none;
    border: 1px solid #fff;
    border-radius: 3px;
    font-size: 0.75em;
    padding: 3px 4px;
    background: #fff;
`