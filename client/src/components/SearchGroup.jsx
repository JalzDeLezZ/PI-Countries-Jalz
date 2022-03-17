import React, {useState} from 'react'
import {getCountryByName} from '../redux/action'
import {useDispatch} from 'react-redux'


const SearchGroup = () => {
  
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  
  
  const mOnChangeInput = (e) => {
    setSearch(e.target.value) //console.log(e.target.value)
  }

  
  const mOnClickButton = async (e) => {
    dispatch(getCountryByName(search));
  }


  return (
    <section className="header-input"> 
        <div className="header-input-container">
        <span className="search-icon"> </span>
        <input type="text" name="" placeholder="Search Country By Name"
            onChange={mOnChangeInput}
        />
        <button onClick={mOnClickButton} className="micro-icon" href=""></button>
        </div>
    </section>
  )
}

export default SearchGroup