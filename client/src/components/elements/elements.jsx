import styled,{css} from "styled-components";

const colores = {
    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}


const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.pValidation === 'false' && css`
        color: ${colores.error};
    `}
`


const Input = styled.input`
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
        border : 3px solid ${colores.borde};
    }
    ${props => props.pValidation === 'true' && css`
        border: 3px solid transparent;
    `}
    
    ${props => props.pValidation === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
    
    ${props => props.pValidation === 'false' && css`
        display: none;
    `}
    ${props => props.pValidation === 'false' && css`
        display: block;
    `}
`


const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover{
        box-shadow: 3px 0px 30px rgba(163,163,163,0.1);
    }
`

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    font-weight: bold;
`

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 60px 30px; 

    background-color: rgba(126, 126, 126, 0.1);

    backdrop-filter: blur(4px);

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
    span{
        position: absolute;
        right: 10px;
        margin: 12px;
    }
`
const ContenedorTerminos = styled.div`
    grid-column: span 2;

    input {
        margin-right: 10px;
    }

    @media(max-width:350px){
        grid-column: span 1;
    }
`

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    
    @media(max-width:350px){
        grid-column: span 1;
    }
` 

const MessageError = styled.div`
    height: 45px;
    line-height: 45px;
    background-color: #f66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
`

export {
    MensajeExito,
    MessageError,
    Formulario,
    Label, 
    GrupoInput,
    Input,
    LeyendaError ,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton
}