import React, {useEffect, useState} from 'react'
import {Selection} from './SelectionElement'
import {RButtonGroup} from './elements/elementsTwo'
import {Button} from './elements/generals'
import '../styles/components/ContentCards.scss'
import Card from './Card'

import { Link } from 'react-router-dom';
import {getAllCountries, filterCountriesByContinent, orderAscOrDsc} from '../redux/action'
import {useDispatch, useSelector} from 'react-redux'

const ContentCards = () => {
  const [stateSelection, setStateSelection] = useState({
    continent : "",
    creado : ""
  })
  
  const dispatch = useDispatch();
  const countries = useSelector( state => state.countries )


  
  /* const mUpdateState = (input) => {
    
    this.setState({
      ...this.state,
      [input.name]:{
        value:input.value,
        error:input.error
      }
    }, () => {console.log(this.state);});
  } */
  const mOnClickRbt = (e) =>{
    // console.log(e.target.value);
    dispatch(filterCountriesByContinent(e.target.value));
  }
  const mOnClickRbt_order = (e) =>{
    console.log(e.target.value);
    dispatch(orderAscOrDsc(e.target.value));
  }
  

  useEffect(() => {
    dispatch(getAllCountries())
  },[]);

  let x = [  "ALL","Europe","Asia","Africa","South America","Oceania"]
  let y = [  "ALL","Existente", "Creado"]
  const mPrueba = (e) =>{
    console.log(e.target.name)
    setStateSelection( (datos)=> {
      return {
        ...datos,
        [e.target.name]: e.target.value
      }
    })
  }
    


  return (
    <main className = "cMain-body">
        <section className = "Home_body-head">

          {
            console.log("Hagi Rai => ",stateSelection)
          } 

          <div className= "hbh1-filters">
              <Selection
                pName = "n_opciones" 
                pMUpdateState={() => {/* mUpdateState() */}}
                pOptions={[
                    {value:"ALL", texto: "ALL"},
                    {value:"Europe", texto: "Europe"},
                    {value:"Asia", texto: "Asia"},
                    {value:"Africa", texto: "Africa"},
                    {value:"South America", texto: "South"},
                    {value:"Oceania", texto: "Oceania"}
                  ]}
              />
              <select onChange={mPrueba} value={stateSelection.continent} name="continent">
                {
                  x.map((e, i) => {
                    return <option key={i} value={e}>{e}</option>
                  })
                }
              </select>

              {/* <RButtonGroup pName="continent" pId="0" pLabel="All" pValue="ALL" pMOnClickRbt={mOnClickRbt}/>
              <RButtonGroup pName="continent" pId="1" pLabel="Europa" pValue="Europe" pMOnClickRbt={mOnClickRbt}/>
              <RButtonGroup pName="continent" pId="2" pLabel="Asia" pValue="Asia" pMOnClickRbt={mOnClickRbt}/>
              <RButtonGroup pName="continent" pId="3" pLabel="África" pValue="Africa" pMOnClickRbt={mOnClickRbt}/>
              <RButtonGroup pName="continent" pId="4" pLabel="América" pValue="South America" pMOnClickRbt={mOnClickRbt}/>
              <RButtonGroup pName="continent" pId="5" pLabel="Oseania" pValue="Oceania" pMOnClickRbt={mOnClickRbt}/> */}
              
              
              <RButtonGroup pName="n_order" pId="iAsc" pLabel="Ord. Asc" pValue="ASC" pMOnClickRbt={mOnClickRbt_order}/>
              <RButtonGroup pName="n_order" pId="iDsc" pLabel="Ord. Dsc" pValue="DSC" pMOnClickRbt={mOnClickRbt_order}/>
          </div>
          
          <Link to = "/tactivity"><Button>Create Activity</Button></Link>
          
        </section>

        <section className="home_containerCards">
            {countries && countries.map(pCountry =>{
            return (
              <Card 
                pImagen = {pCountry.image}
                pNombre = {pCountry.name}
                pContinente = {pCountry.continent}
                pId = {pCountry.id}
                key = {pCountry.id}
              />
            )})
          }
        </section>

        <div>
          {/* <Pagination
              className="hbh2-pagination"
              onLeftClick = {console.log("Rha! LEFT")}
              onRightClick = {console.log("Rha! RIGHT")}
              page = {1}
              totalPages = {2}
            /> */}
        </div>
      </main>
  )
}

export default ContentCards