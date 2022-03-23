import React,{useEffect} from 'react'
import {getActivities, filterByActivity} from '../../redux/action'
import {useDispatch, useSelector} from 'react-redux'


const oStyleSelect = {
    color: "#fff",
    margin: "5px",
    outline: "none",
    border: "1px solid #fff",
    borderRadius: "7px",
    width: "140px",
    fontSize: "0.6em",
    padding: "3px 4px",
    backgroundColor: "#00000070"}
  
const SelectActivity = () => {
    const dispatch = useDispatch();
    const aActivities = useSelector( state => state.aActitivities)
  
    const mChangeSelect = (e) =>{
        const {value} = e.target; //console.log(value);
        dispatch(filterByActivity(value))
      };

    
    useEffect(() => {
        dispatch(getActivities())
    },[dispatch]);

  return (
    <div>
        <select 
            style={oStyleSelect} 
            name="n_activity"
            onChange={mChangeSelect}    
        >
            {
            aActivities.map((e,i)=>{
                return <option key={e.id} value={e.name}>{e.name}</option>
            })
            }
        </select>
    </div>
  )
}

export default SelectActivity

 