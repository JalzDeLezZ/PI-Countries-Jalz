import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {filterCountriesByContinent} from '../redux/action'

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

const Selection = (props) => {
  const {pName,pMUpdateState, pOptions} = props;

  const dispatch = useDispatch();


  const [continents , setContinents] = useState("")


  const mOnChange = (e) => {
    dispatch( filterCountriesByContinent (e.target.value))
  }

  return (
    <ContSelect
            id={"i"+pName}
            name={pName}
            onChange={mOnChange}
            value={continents}
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