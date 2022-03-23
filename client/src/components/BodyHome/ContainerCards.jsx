import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllCountries } from '../../redux/action';
import CardsByPagination from '../elements/CardsByPagination';
import Pagination from '../elements/pagination';

const ContainerCards = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCountries()) 
    },[dispatch]);
    const CountriesByReducer = useSelector( state => state.countries )
    
    const [sCurrentPage, setSCurrentPage] = useState(1);
    const [sCardsPerPage] = useState(10)
    
    const vIndexOfLastPage = sCurrentPage * sCardsPerPage
    const vIndexOfFirstPage = vIndexOfLastPage - sCardsPerPage

    const vCurrentPiecePage = CountriesByReducer.slice(vIndexOfFirstPage, vIndexOfLastPage)

    
    const mIterantPaginate = (pNumberClick) => setSCurrentPage(pNumberClick)

  return (
    <section className="home_containerCards">

        <CardsByPagination
            pAPieceOfTotalCards = {vCurrentPiecePage}
            pBoleanLoading = {false}            
        />
        
        <Pagination
            pCardsPerPage = {sCardsPerPage}
            pTotalCards = {CountriesByReducer.length} 
            pMPaginate = {mIterantPaginate}
        />

        {
            // JSON.stringify(CountriesByReducer)
            // JSON.stringify(vCurrentPiecePage)
        }
    </section>
  )
}

export default ContainerCards