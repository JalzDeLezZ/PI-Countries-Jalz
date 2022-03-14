import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading' 
import '../styles/pages/landingPage.scss'
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LandingPage = () => { 

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setTimeout(() =>{
          setIsLoading(false);
      },1000);
  })

  return (
    <div className="r1_landingPage-body">
        
        {
          isLoading ? <Loading/> : 
          <figure>  
            
            <Link to="home"><button className="btn-grad">Ingresar</button> </Link>
          </figure>
        }
       
    </div>
  )
}

export default LandingPage