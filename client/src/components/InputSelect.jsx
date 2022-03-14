import React from 'react'
import styled from 'styled-components'

const Select = styled.div`
  margin: 5px;
  select{
      outline: none;
      border: none;
      border-radius: 7px;
      width: 140px;
      font-size: 0.6em;
      padding: 3px 4px
  }
` 
const InputSelect = (props) => {
  return (
    <Select>
          <select
            id={"id-"+props.name}
            name={props.name}
            onChange={props.mUpdateState}
          >
            {
              props.opciones.map( (pOption, index) => (
                <option key={index} value={pOption.value}> {pOption.texto} </option>
              ) )
            }
          </select>
      </Select>
  )
}

export default InputSelect