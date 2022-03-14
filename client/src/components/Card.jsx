import React from 'react'
import '../styles/components/Card.scss'

const Card = (props) => {
    const {pImagen, pNombre, pContinente, pId} = props

    return (
        <target className="component-card">
            
            <h3>{pNombre}</h3>
            <h5>{pContinente}</h5>
            <figure className="card-figure">
                <img src={pImagen} alt={pNombre}/>
            </figure>
            <h6>{pId}</h6>
        </target>
    )
}

export default Card