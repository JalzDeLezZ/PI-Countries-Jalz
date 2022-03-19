import React from 'react'
import {Input, GrupoInput, LeyendaError, Label } from './elements/elements'
import styled from "styled-components";

const InputGroup = (props) => {
  
    const {pMSecondPass, tipo, label, placeholder, name, leyendaError, expresionRegular, pState, pSetState , pMin ,pMax} = props


    const mOnChange = (e) => {
        pSetState({...pState, current_data: e.target.value});//{ current_data: '', valido: null }
    }

    const mValitation = () => {
        if (expresionRegular) {
            if (expresionRegular.test(pState.current_data)) {
                console.log('INN Correct')
                pSetState({...pState, is_valid: 'true'})
            } else {
                console.log('INN Incorrect')
                pSetState({...pState, is_valid: 'false'})
            }
        }
        if (pMSecondPass) {
            pMSecondPass();
        }
    }

  return (
    <div>

        <Label 
            htmlFor={name} 
            pValidation={pState.is_valid}
        >{label}</Label>

        <GrupoInput>
            <Input
            type={tipo} 
            placeholder={placeholder} 
            id={name} 
            value={pState.campo}
            onChange={mOnChange}
            onKeyUp={mValitation}
            onBlur={mValitation}
            pValidation={pState.is_valid}
            min = {pMin}
            max = {pMax}
            />
            {
                pState.is_valid === null ?<span style={{display: 'none'}}></span>
                :pState.is_valid === 'true' ? <span>✅</span>
                :<span>❌</span>
            }
        </GrupoInput>
        <LeyendaError 
            pValidation={pState.is_valid}
        >{leyendaError}</LeyendaError>

    </div>
  )
}

const InputRange = (props) =>{
    const {pName, pOState, pOSetState, pLabel,pType,pPlaceholder, pErrorLeyend, pMin = 0 , pMax = 5}= props
    
    
    const mOnChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        pOSetState({
            ...pOState,
            [name]: {
                current_data: value,
                is_valid: (value >0 && value <=5)? 'true' : 'false'
            }
        });//{ current_data: '', valido: null }   
    }
    
    return (
        <div>
            
            <Label 
                htmlFor={pName} 
                pValidation={pOState.is_valid}
            >{`${pLabel} ( ${pOState[pName]["current_data"]} )`}</Label>

            <InnRange
                type={pType} 
                placeholder={pPlaceholder} 
                id={pName} 
                value={pOState[pName]["current_data"]}
                onChange={mOnChange}
                name= {pName}
                min= {pMin}
                max= {pMax}
                />
            {/* <span>{JSON.stringify(pOState)}</span>
            <h1>{JSON.stringify(pName)}</h1>
            <h6>{JSON.stringify(pOState[pName]['is_valid'])}</h6> */}
            <LeyendaError
                pValidation={pOState[pName]['is_valid']}
            >{pErrorLeyend}</LeyendaError>

        </div>
    )
}


const InnSearch = () => {
  return (
      <ContainerDetalle>
            <label htmlFor=""></label>
            <input list="iPaises" className="123" type="text" placeholder=""/>
            <details id="iPaises">
                <option value="One">One</option>
                <option value="Osc">Osc</option>
                <option value="Oness">Oness</option>
                <option value="Two">TWo</option>
                <option value="Three">Three</option>z|
            </details>
            <button type="button" >ADD</button>
      </ContainerDetalle>
  )
}

export {InputGroup, InputRange, InnSearch}

const InnRange = styled.input`
    border: none;
    width: 100%;
    padding: 0;
` 

const ContainerDetalle = styled.div`
    display: flex;
    input{
        width: 70%;
        height: 45px;
        border: 1px solid #fff;
        border-radius: 3px 0 0 3px;
        padding: 0 40px 0 10px;
        outline: none;
    }
    details{
        position: absolute;
        display: none;
    }
    button{
        width: 30%;
        display: inline-block;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 0 3px 3px 0;
    }
`