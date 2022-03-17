import React from 'react'
import '../styles/components/Card.scss'

const Card = (props) => {
    const {pImagen, pNombre, pContinente, pId} = props

    return (
        <target className="component-card">
            
            <figure className="card-figure">
                <img src={pImagen} alt={pNombre}/>
                <h6>{pId}</h6>
            </figure>
            
            <assets>
                <h3>{pNombre}</h3>
                <h5>{pContinente}</h5>
            </assets>
        </target>
    )
}

export default Card

