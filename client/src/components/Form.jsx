import React,{useState} from 'react'
import {MensajeExito,MessageError,Formulario, ContenedorBotonCentrado, Boton} from './elements/elements';
import {InputGroup, InputRange, InnSearch} from './FormComponents';
import {expretion} from '../helpers/validation'
import { CSelect } from './elements/elementsTwo';
// import Test from './Test.jsx';
const Form = () => {
    
    const [oText, setOtext] = useState({ current_data: '', is_valid: null });
    const [oDuration, setOduration] = useState({ current_data: '', is_valid: null });
    const [formState, setFormState] = useState(null);  
    
    const [oStates, setOstates] = useState(
        {
            text: { current_data: '', is_valid: null },
            dificulty: { current_data: '', is_valid: null },
            month: { current_data: '', is_valid: null },
            season: { current_data: '', is_valid: null }
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
  return (
      <div>

        {/* <Test/> */}
        <Formulario action="" onSubmit={mOnSubmit}>
            <InputGroup
                pState = {oText}
                pSetState = {setOtext}
                tipo="text"
                label= "Nombre"
                placeholder = "Nombre"
                name="n_name"
                leyendaError="Solo se aceptan un minimo de 4 letras de la Aa-Zz / 0-9"
                expresionRegular={expretion.texto}
            /> 
            <InputRange
                pName = "dificulty"
                pOState = {oStates}
                pOSetState = {setOstates}
                pLabel = "Nivel de Dificultad"
                pType = "range"  
                pMin = {0}
                pMax = {5}
                pErrorLeyend="ERROR!!!!!"
            />
            <InputGroup
                pState = {oDuration}
                pSetState = {setOduration}
                tipo="number"
                label= "Duración (Meses)"
                placeholder = "Nombre"
                name="n_duration"
                leyendaError="Solo se aceptan numeros del 1-12"
                expresionRegular={expretion.duration}
                pMin = {1}
                pMax = {12}
            />
            <CSelect
                pName = "n_opciones" 
                pMUpdateState={mOnClickRbt}
                pAOptions={[
                    {value:"verano", texto: "verano"},
                    {value:"primavera", texto: "primavera"},
                    {value:"Otoño", texto: "Otoño"},
                    {value:"Invierno", texto: "Invierno"}
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

export default Form