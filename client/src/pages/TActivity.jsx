import React, {useState} from 'react'
import '../styles/pages/TActivity.scss'
// import {isText , isEmail} from '../helpers/validation.js'

import {Input, MensajeExito,MessageError,Formulario, Label,  ContenedorTerminos, ContenedorBotonCentrado, Boton} from '../components/elements/elements';
import InputGroup from '../components/InputGroup'


const TActivity = () => {
  
  const expresiones = {
      usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  
  const [oUser, setOuser] = useState({ current_data: '', is_valid: null });
  //const [oNombre, setOnombre] = useState({ current_data: '', is_valid: null });
  const [oPassword, setOpassword] = useState({ current_data: '', is_valid: null });
  const [oPassword2, setOpassword2] = useState({ current_data: '', is_valid: null });
  /* const [oCorreo, setOcorreo] = useState({ current_data: '', is_valid: null });
  const [oTelefono, setOtelefono] = useState({ current_data: '', is_valid: null }); */
  const [bTerms, setBterms] = useState(false);
  const [formState, setFormState] = useState(null);


  const mSecondPass = () =>{
      if(oPassword.current_data.length > 0){
          if (oPassword.current_data !== oPassword2.current_data) {
              setOpassword2((prevState) => {
                  return {...prevState, is_valid:'false'}
              });
          } else {
              setOpassword2((prevState) => {
                  return {...prevState, is_valid:'true'}
              })
          }
      }
  }

  const mReloadStateCheck = (e) => {
      setBterms(e.target.checked)
  }

  const mOnSubmit = (e) => {
    e.preventDefault();

    if( oUser.is_valid === 'true' &&
        oPassword.is_valid === 'true' &&
        oPassword2.is_valid === 'true' &&
        bTerms
        ){
        console.log('RESET FORM')
        setFormState(true)
        e.target.reset();
    } else {
        setFormState(false)
        console.log('IMPOSIBLE RESET FORM')
    }
  }

  return (
    <div className="page_TuristicActivity">

      <Formulario action="" onSubmit={mOnSubmit}>
                
          <InputGroup
              pState = {oUser}
              pSetState = {setOuser}
              tipo="text"
              label= "Usuario"
              placeholder = "USER"
              name="n_usuario"
              leyendaError="El usurio blablblalbal lbalbalb bla bla"
              expresionRegular={expresiones.usuario}
          />
          
          <InputGroup
              pState = {oPassword}
              pSetState = {setOpassword}
              tipo="password"
              label= "Contraseña"
              placeholder = "C@nt4señ4"
              name="n_contraseña"
              leyendaError="Escribo bonito CT*R!!! XD"
              expresionRegular={expresiones.password}
          />

          <InputGroup 
              pState = {oPassword2}
              pSetState = {setOpassword2}
              tipo="password"
              label= "Repetir Contraseña"
              placeholder = "C@nt4señ4"
              name="n_contraseña_two"
              leyendaError="Que Sean Iguales Por Favor CT*R!!! XD"
              pMSecondPass = {mSecondPass}
          />
          
          <ContenedorTerminos>
              <Label htmlFor="terminos">
                  Acepto Los Terminos y Condiciones
                  <Input 
                      id="terminos"
                      type="checkbox" 
                      name="terminos" 
                      checked={bTerms} 
                      onChange={mReloadStateCheck}
                  />
              </Label>
          </ContenedorTerminos>
          { formState == false &&
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
export default TActivity;
 