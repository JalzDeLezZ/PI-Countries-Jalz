import React from 'react'
import {Input, GrupoInput, LeyendaError, Label } from './elements/elements'

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

    <Label htmlFor={name} pValidation={pState.is_valid}>{label}</Label>
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

        { pState.is_valid === 'true' ? <span>✅</span>
        :<span>❌</span>}
    </GrupoInput>
    <LeyendaError pValidation={pState.is_valid}>{leyendaError}</LeyendaError>

    </div>
  )
}

export default InputGroup