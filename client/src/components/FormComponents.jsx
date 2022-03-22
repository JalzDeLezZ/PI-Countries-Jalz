import React, {useEffect, useState} from 'react'
import {Input, GrupoInput, LeyendaError, Label } from './elements/elements'
import styled from "styled-components";
import {getAllCountries} from '../redux/action'
import {useDispatch, useSelector} from 'react-redux'

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
            >{`${pLabel} ( ${pOState[pName]["current_data"]} )`}
            </Label>

            <InnRange
                type={pType} 
                placeholder={pPlaceholder} 
                id={pName} 
                value={pOState[pName]["current_data"]}
                onChange={mOnChange}
                onBlur={mOnChange}
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


const InnSearch = ({pPlaceHolder, pLabel, pSACountries, pSetSAcountries}) => {

    const dispatch = useDispatch();
    const aCountriesReducer = useSelector( state => state.allCountries)

    const aAllCountryPersonalized = aCountriesReducer.map(( pI ) => {
        return { kId: pI.id , kName: pI.name, kImg: pI.image }
    })
    console.log(aAllCountryPersonalized);

    const [sInn, setSInn] = useState('');   
    const [sArrayCountries, setSArrayCountries] = useState([]);
    const [sFlagBoolean, setSFlagBoolean] = useState(
        {
            countryNotFound : false,
            repeatedCountry : false
        }
    );
    

    const mSetInn = (e) => {
        setSInn(e.target.value) // console.log(e.target.value)
    }

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch]); 

    const mAddCountry = () =>{
        const oMatch = aAllCountryPersonalized.find(e => 
            e.kId === sInn 
        )
        const bReplyCountry = sArrayCountries.find(e => e.kId === sInn);//console.log("??????",sArrayCountries)

        if (!oMatch) {// console.log("NO EXISTE EL PAIS");
            setSFlagBoolean({...sFlagBoolean, countryNotFound: true})
        }
        else if(bReplyCountry) {// console.log("DUPLICIDAD");
            setSFlagBoolean({...sFlagBoolean, repeatedCountry: true})
        }
        else{
            setSFlagBoolean({repeatedCountry: false, countryNotFound: false});// console.log(sFlagBoolean)
            setSArrayCountries([...sArrayCountries, oMatch])
            pSetSAcountries([...pSACountries, oMatch.kId])
            setSInn('')//console.log("=>=>=>=>=>",sArrayCountries)
        }       
    }

    const mDeleteCountry = (pIdentity) => {
        const aFilterCountries = sArrayCountries.filter((pI)=>(
            pI.kId !== pIdentity
        ))
        setSArrayCountries(aFilterCountries)
        
        const aSubmitFilter = pSACountries.filter((pI)=>(
            pI !== pIdentity
        ))
        pSetSAcountries(aSubmitFilter)
    }

  return (
      <ContainerDetalle>
            <label htmlFor="y">{pLabel}</label>
            <div className="inputSearch">
                <input 
                    list="x" 
                    id="y" 
                    className="123" 
                    type="search" 
                    value={sInn} 
                    onChange={mSetInn}
                    placeholder={pPlaceHolder}
                />
                <datalist id="x">
                    {
                        aAllCountryPersonalized.map((pI,i) => {
                            return <option key={i} value={pI.kId}>{pI.kName}</option>
                        })
                    }
                </datalist>
                <button type="button" onClick={mAddCountry} >ADD</button>
            </div>
            {
                sFlagBoolean.countryNotFound ? <span>PAIS NO ENCONTRADO</span>
                : sFlagBoolean.repeatedCountry && <span>DUPLICIDAD DE PAIS</span>
            }
            <DivResoultCountries>
                {
                sArrayCountries.map((pI, i) => (
                    <figure key={i}>
                        {/* <h6>{pI.kName}</h6> */}
                        <button 
                            className='btn-delete_figure' type='button' 
                            onClick={() => (mDeleteCountry(pI.kId))}    
                        >X</button>
                        <img src={pI.kImg} alt="" />
                    </figure>
                    ))
                }
            </DivResoultCountries>
      </ContainerDetalle>
  )
}

export {InputGroup, InputRange, InnSearch}

const DivResoultCountries = styled.div`
    display: flex;
    figure{
        width: 60px;
        height: 60px; 
        margin: 9px;
        img{
            height: 100%;
            width: 100%;
            filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7));
            border-radius: 50%; 
        }
        .btn-delete_figure{
            background-color: transparent;
            outline: none;
            border: none;
            position: relative;
            z-index: 1;
            left: 45px;
            border-radius: 50%;
        }
    }
` 

const InnRange = styled.input`
    border: none;
    width: 100%;
    padding: 0;
` 

const ContainerDetalle = styled.div`
    display: flex;
    flex-direction: column;
    label{
        margin-bottom: 9px;
        margin-left: 9px;
    }
    .inputSearch{
        display: flex;
    }
    input{
        width: 70%;
        height: 45px;
        border: 1px solid #fff;
        border-radius: 3px 0 0 3px;
        padding: 0 10px 0 10px;
        outline: none;
    }
    details{
         display: none;
         position: absolute;
    }
    button{
        width: 30%;
        display: inline-block;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 0 3px 3px 0;
        cursor: pointer;
        &:hover{
            box-shadow: inset -2px -1px 5px rgb(0 0 0 / 50%);
        }
    }
`