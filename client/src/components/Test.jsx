import React,{useState} from 'react'

import {MensajeExito,MessageError,Formulario, ContenedorBotonCentrado, Boton} from './elements/TestElements';
import {InputGroup, InputRange, InnSearch} from './TestFunction';
// import {InnGroup} from './TestFunction';
import {expretion} from '../helpers/validation'
import { CSelect } from './elements/TestElements';

const Test = () => {
    const [oText, setOtext] = useState({ current_data: '', is_valid: null });
    const [formState, setFormState] = useState(null);  
    
    const [oStates, setOstates] = useState(
        {
            n_one   : { current_data: '', is_valid: null },
            n_two   : { current_data: '', is_valid: null },
            n_three : { current_data: '', is_valid: null },
            dificulty: { current_data: '', is_valid: null }
        }
    )

    const mOnSubmit = (e) => {
      e.preventDefault();
  
      if( oText.is_valid === "true"){
          setFormState(true)
          e.target.reset();
      } else {
          setFormState(false)
      }
    }
    
    const mOnClickRbt = (e) =>{
        console.log(e.target.value); 
    };

    const oStyle = {
        textAlign: 'center',
    } 

    

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
  return (
      <div>
          <form action="" onSubmit={mOnSubmitTwo}>
            <div>

                <label htmlFor="iOne">
                    Nombre de Actividad
                </label>
                <input 
                    id="iOne"
                    name = "n_one"   
                    value={oStates.n_one.current_data}       
                    type="text" 
                    onChange = {mOnChange}
                    placeholder= "n_one"
                    onKeyUp= {mValidatioTwo}
                    onBlur={mVerification} 
                />

            </div>
            {/* <InnGroup
                pId             = "iOne"
                pName           = "n_activ" 
                pType           = "text" 
                pLabel          = "Nombre de Actividad" 
                pMOnChange      = {mOnChange} 
                pState          = {oStates.n_one}
                pMValitation    = {mValidatioTwo}
                pLeyendaError   = "ERROR ONE"
            /> */}
            <input 
                name = "n_two"   
                value={oStates.n_two.current_data}  
                type="text" 
                onChange = {mOnChange}
                placeholder= "n_two"
                />
                
            <input 
                name = "n_three" 
                value={oStates.n_three.current_data}      
                type="text" 
                onChange = {mOnChange}
                placeholder= "n_three"
                />
            
            <button type="submit">SEND</button>
          </form>

    <Formulario action="" onSubmit={mOnSubmit}>
        

        <InputGroup
            pState = {oText}
            pSetState = {setOtext}
            tipo="text"
            label= "Nombre"
            placeholder = "Nombre"
            name="n_name"
            leyendaError="Solo se aceptan un minimo de 4 letras de la Aa-Zz / 0-9"
            expresionRegular={expretion.usuario}
        /> 
        <InputRange
            pName = "dificulty"
            pState = {oStates.dificulty}
            pSetState = {setOstates.dificulty}
            pLabel = "Nivel de Dificultad"
            pType = "range" 
            pRegularExpretion = {expretion.difficulty}
            pMin = {0}
            pMax = {5} 
            pErrorLeyend= "ERROR!!!!!!!!!!"
        />
        <InputGroup
            pState = {oText}
            pSetState = {setOtext}
            tipo="number"
            label= "Duración (Meses)"
            placeholder = "Nombre"
            name="n_duration"
            leyendaError="Solo se aceptan numeros del 1-12"
            expresionRegular={expretion.usuario}
        />
        <CSelect
            pName = "n_opciones" 
            pMUpdateState={mOnClickRbt}
            pAOptions={[
                {value:"FILTRO", texto: "FILTRO"},
                {value:"Alfabetico", texto: "Alfabetico"},
                {value:"Población", texto: "Población"}
            ]}
        />

        <InnSearch/>

        <div style={oStyle}>
            PAISES SELECCIONADOS
        </div>

        { 
            formState == false &&
            <MessageError>
                <p>
                    <span>⚠️</span>´
                    <b>Error:</b> Por favvor rellena el formulario correctamente.
                </p>
            </MessageError>
        }
        <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            {formState && <MensajeExito>Formulario Enviado Exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
    </Formulario>
    </div>

  )
}

export default Test