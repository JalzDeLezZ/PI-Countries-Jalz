import React,{useState,/* useEffect */} from 'react'
import {Selection} from './SelectionElement'
import {RButtonGroup} from '../elements/elementsTwo'
import {Button} from '../elements/generals'
import '../../styles/components/ContentCards.scss'

import { Link } from 'react-router-dom';
import {/* getActivities */filterCountriesByContinent, filtGeneral} from '../../redux/action'
import {useDispatch, /* useSelector */} from 'react-redux'
import SelectActivity from './SelectActivity'

/* const oStyleSelect = {
  color: "#fff",
  margin: "5px",
  outline: "none",
  border: "1px solid #fff",
  borderRadius: "7px",
  width: "140px",
  fontSize: "0.6em",
  padding: "3px 4px",
  backgroundColor: "#00000070"} */

const PartFilters = () => {

  const dispatch = useDispatch();
  // const aActivities = useSelector( state => state.aActitivities)

  const [sSelect , setSSelect] = useState(null)
  const [sRadioBtn , setSRadioBtn] = useState(null)
 
  const mClickSelectContinent = (e) =>{
    dispatch(filterCountriesByContinent(e.target.value));
  };

  const mOnClickSelectFilter = (e) =>{
    const {value} = e.target; //console.log(value);
    setSSelect(value); 
    dispatch(filtGeneral(value, sRadioBtn))
  };
  
  const mOnClickRbtOrder = (e) =>{
    const {value} = e.target; console.log(value);
    setSRadioBtn(value); //console.log("RBT",sRadioBtn) 
    dispatch(filtGeneral(sSelect, value))
  }
   /* 
  useEffect(() => {
    dispatch(getActivities())
  },[dispatch]); */

  return (
    <section className = "Home_body-head">
          <div className= "hbh1-filters">
              <Selection
                pName = "n_opciones" 
                pMUpdateState={mClickSelectContinent}
                pOptions={[
                    {value:"ALL", texto: "TODOS LOS PAISES"},
                    {value:"Europe", texto: "Europe"},
                    {value:"Asia", texto: "Asia"},
                    {value:"Africa", texto: "Africa"},
                    {value:"South America", texto: "South"},
                    {value:"Oceania", texto: "Oceania"}
                  ]}
              /> 

              <SelectActivity/> 
              {/* <select style={oStyleSelect} name="n_activity">
                  {
                    aActivities.map((e,i)=>{
                      return <option key={e.id} value={e.name}>{e.name}</option>
                    })
                  }
              </select> */}

              <Selection
                pName = "n_opciones" 
                pMUpdateState={mOnClickSelectFilter}
                pOptions={[
                    {value:'', texto: "FILTRO"},
                    {value:"alphabet", texto: "Alfabetico"},
                    {value:"population", texto: "Población"}
                  ]}
              />

              <RButtonGroup pName="order" pId="iAsc" pLabel="Ord. Asc" pValue="ASC" pMOnClickRbt={mOnClickRbtOrder}/>
              <RButtonGroup pName="order" pId="iDsc" pLabel="Ord. Dsc" pValue="DSC" pMOnClickRbt={mOnClickRbtOrder}/>
          </div>
          
          <Link to = "/tactivity"><Button>Create Activity</Button></Link>
          
        </section>
  )
}

export default PartFilters