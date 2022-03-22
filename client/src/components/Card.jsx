import React from 'react'
import '../styles/components/Card.scss'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {pImagen, pNombre, pContinente, pId} = props

    return (
        <div className="component-card">
            
            <figure className="card-figure">
                <img src={pImagen} alt={pNombre}/>
                <h6>{pId}</h6>
            </figure>
            
            <div>
                <Link to={`/country/${pId}`}><h3>{pNombre}</h3></Link>
                <h5>{pContinente}</h5>
            </div>
        </div>
    )
}

export default Card

