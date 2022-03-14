import React from 'react'
import InputSelect from './InputSelect'
import '../styles/components/BodyCards.scss'
import Card from './Card'

const ContentCards = () => {
  
  const mUpdateState = (input) => {
    
    this.setState({
      ...this.state,
      [input.name]:{
        value:input.value,
        error:input.error
      }
    }, () => {console.log(this.state);});
  }

  return (
    <main className = "cMain-body">
        <section className = "Home_body-head">
          <div className= "hbh1-filters">
              <InputSelect
                name = "opciones"
                label="Elige una Opcion"
                mUpdateState={() => {mUpdateState()}}
                opciones={[
                    {value:"", texto: "Selecciona una Opcion..."},
                    {value:"1", texto: "Página Web"},
                    {value:"2", texto: "Aplicación Móvil"}
                  ]}
                  />
              <InputSelect
                name = "opciones"
                label="Elige una Opcion"
                mUpdateState={() => {mUpdateState()}}
                opciones={[
                    {value:"", texto: "Selecciona una Opcion..."},
                    {value:"1", texto: "Página Web"},
                    {value:"2", texto: "Aplicación Móvil"}
                  ]}
                  />
              <InputSelect
                name = "opciones"
                label="Elige una Opcion"
                mUpdateState={() => {mUpdateState()}}
                opciones={[
                    {value:"", texto: "Selecciona una Opcion..."},
                    {value:"1", texto: "Página Web"},
                    {value:"2", texto: "Aplicación Móvil"}
                  ]}
                  />
              <InputSelect
                name = "opciones"
                label="Elige una Opcion"
                mUpdateState={() => {mUpdateState()}}
                opciones={[
                    {value:"", texto: "Selecciona una Opcion..."},
                    {value:"1", texto: "Página Web"},
                    {value:"2", texto: "Aplicación Móvil"}
                  ]}
                  />
          </div>

          <div className="hbh2-pagination">
              <button>1</button>
              <button>2</button>
          </div>
        </section>

        <section className="home_containerCards">
            <Card/>
        </section>

      </main>
  )
}

export default ContentCards