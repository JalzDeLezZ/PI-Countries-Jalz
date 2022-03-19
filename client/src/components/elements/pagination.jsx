import React from 'react'

const Pagination = (props) => {

    const {pCardsPerPage, pTotalCards, pMPaginate} = props;

    const aNumberPage = [];

    for (let i = 1; i < Math.ceil(pTotalCards / pCardsPerPage); i++) {
        aNumberPage.push(i)
    }

  return (
    <div> 
           {
               aNumberPage.map(pI => (
                  
                        <button key={pI} type="button" onClick={() => pMPaginate(pI)}>{pI}</button>                        
                   
               ))
           }  
    </div>
  )
}

export default Pagination