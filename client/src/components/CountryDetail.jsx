import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../redux/action';
import '../styles/components/Detail.scss'
const CountryDetail = () => {
    const country = useSelector( state => state.oCountry )

    console.log( country.data )

    const {identity} = useParams();
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getCountryById(identity))
    },[dispatch,identity])
    
  return (
    <div key={country.id} className="detail-container">
        <div className="detail-target">
          <h3>{country.name}</h3> 
          <img src={country.image} alt="" />
          <h3>{country.continent}</h3>
          <h3>{country.capital}</h3>
          <h3>{country.subregion}</h3>
          <h3>{country.area}</h3>
          <h3>{country.poblacion}</h3>
        </div>
    </div>
  )
}

export default CountryDetail