import React from 'react'
import '../styles/components/ContentCards.scss'

import ContainerCards from './BodyHome/ContainerCards'
import PartFilters from './BodyHome/PartFilters'

const ContentCards = () => {
  
  return (
    <main className = "cMain-body">
        <PartFilters/>

        <ContainerCards/> 
      </main>
  )  
}

export default ContentCards
