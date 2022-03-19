import React from 'react'
import {Input, GrupoInput, LeyendaError, Label } from './elements/elements'
import styled from "styled-components";
import {MyLabel,MyInput,MyLeyendaError } from './elements/elements'

/* const InnGroup = (props) => {
    const {pId, pMOnChange, pMValitation, pType, pLabel,  pName, pLeyendaError,   pState} = props

    const mOnSubmitTwo = (e) => {
        e.preventDefault();
        // console.log(oStates.n_one.is_valid)
        for(let key in oStates) {
            console.log(key);
            console.log(oStates[key].is_valid)
        }
        
      }

    let mOnChange= (e) =>{
        const {name, value} = e.target
        console.log(name," : ",value)
        e.preventDefault(); 
        setOstates({  
            ...oStates,
            [name]: {
                current_data: value,
                is_valid: null
            }
        })
    }
    const mValidatioTwo = (e) => {
        const {name, value} = e.target
        let x = oStates[name].current_data
        // console.log(x,"AAAAAAAAAAAAA")
        if (expretion) {
            if (expretion.texto.test(x)) {
                console.log("INN CORRECT")
                setOstates({  
                    ...oStates,
                    [name]: {
                        current_data: value,
                        is_valid: 'true'
                    }
                })
            }
            else{
                console.log('INN Incorrect')
                setOstates({  
                    ...oStates,
                    [name]: {
                        current_data: value,
                        is_valid: 'false'
                    }
                })
            }
        } 
          
    }
    const mVerification =(e)=> {
        console.log(oStates)
    }

    return(
        <div>
        <MyLabel 
            htmlFor={pName} 
            pStyle={pState.pName.is_valid}
        >{pLabel}</MyLabel>

        <GrupoInput>
            <MyInput
                id={pId}
                name= {pName}
                value={pState.pName.current_data}
                type={pType} 
                onChange={pMOnChange}
                placeholder={pLabel} 
                onKeyUp={pMValitation}
                onBlur={pMValitation}
                pStyle={pState.pName.is_valid}
            />
            {
                pState.pName.is_valid === 'true' ? <span>✅</span>
                :<span>❌</span>
            }
        </GrupoInput>
        <MyLeyendaError 
            pStyle={pState.pName.is_valid}
        >{pLeyendaError}</MyLeyendaError>
        </div>
    )
} */
/* ===================================================== */
/* ===================================================== */
/* ===================================================== */
/* ===================================================== */

const InputGroup = (props) => {
  
    const {pMSecondPass, tipo, label, placeholder, name, leyendaError, expresionRegular, pState, pSetState} = props


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
            />
            {
                pState.is_valid === 'true' ? <span>✅</span>
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
    const {pName, pState, pSetState, pRegularExpretion,pLabel,pType,pPlaceholder, pErrorLeyend, pMin = 0 , pMax = 5}= props
    
    
    const mOnChange = (e) => {
        pSetState({...pState, current_data: e.target.value});//{ current_data: '', valido: null }   
    }

    const mValitation = () => {
        if (pRegularExpretion) {
            if (pRegularExpretion.test(pState.current_data)) {
                console.log('INN Correct')
                pSetState({...pState, is_valid: 'true'})
            } else {
                console.log('INN Incorrect')
                pSetState({...pState, is_valid: 'false'})
            }
        } 
    }

    return (
        <div>
            <Label 
                htmlFor={pName} 
                pValidation={pState.is_valid}
            >{pLabel}</Label>

            <InnRange
                type={pType} 
                placeholder={pPlaceholder} 
                id={pName} 
                value={pState.current_data}
                onChange={mOnChange}
                onKeyUp={mValitation}
                onBlur={mValitation}
                name= {pName}
                min= {pMin}
                max= {pMax}
                /> 
            <LeyendaError 
                pValidation={pState.is_valid}
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

export {InputGroup, InputRange, InnSearch,
    // InnGroup
    }

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