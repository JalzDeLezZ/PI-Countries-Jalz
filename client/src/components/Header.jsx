import React from 'react'
import '../styles/components/Header.scss'
const Header = () => {
  return (
    <header className="cmpHeader"> 
        <section className="header-input">
          <div className="header-input-container">
            <span className="search-icon"> </span>
            <input type="text" name="" placeholder="Search Country By Name"/>
            <button className="micro-icon" href=""></button>
          </div>
        </section>

        <figure className="header-logo">
          <img src="https://i.ibb.co/PCL6fFp/6964561312-081db769-682b-4867-89b5-89d98411cadc.png" />
        </figure>
      </header>
  )
}

export default Header