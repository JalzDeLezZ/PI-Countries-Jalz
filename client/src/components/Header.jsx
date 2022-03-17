import React from 'react'
import '../styles/components/Header.scss'
import SearchGroup from './SearchGroup.jsx'
const Header = () => {

  return (
    <header className="cmpHeader"> 
        <SearchGroup/>
        <figure className="header-logo">
          <img src="https://i.ibb.co/PCL6fFp/6964561312-081db769-682b-4867-89b5-89d98411cadc.png" alt="asd"/>
        </figure>
      </header>
  )
}

export default Header