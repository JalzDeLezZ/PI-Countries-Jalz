const axios = require('axios');

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'; 
export const GET_COUNTRI_BY_NAME = 'GET_COUNTRI_BY_NAME'; 
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'; 
export const ORDER_ASC_OR_DSC = 'ORDER_ASC_OR_DSC'; 

/* 
export const getAllCountries = () => {
   return (dispatch) => {
     axios.get(`http://localhost:3001/countries`)
     .then((response) =>{
       dispatch({
         type: GET_ALL_COUNTRIES,
         payload: response.data
       })
     })
   }
}; */

export const getAllCountries =  () => {
  return async (dispatch) => {
    try {
      const jsonResponse = await axios.get(`http://localhost:3001/countries`);
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: jsonResponse.data
      })
    } catch (error) { console.error(error);}
  };
}
export const getCountryByName = (name) => dispatch => {
  return fetch(`http://localhost:3001/countries?name=${name}`)
            .then(response => response.json())
            .then(data => dispatch({type: 'GET_COUNTRI_BY_NAME', 
                              payload: data}))
};

export function filterCountriesByContinent (filter_continent){
  return {
    type: FILTER_BY_CONTINENT,
    payload : filter_continent
  }
}
export function orderAscOrDsc (order){
  return {
    type: ORDER_ASC_OR_DSC,
    order
  }
}
















/* export function getCountryByName (name){
  return async (dispatch) => {
    try {
      var json = await axios.get(`http://localhost:3001/countries?name=${name}`);
      dispatch({
        type: GET_COUNTRI_BY_NAME,
        payload: json.data
      })
      
    } catch (error) { console.error(error);}
  }
} */


/* export const getCountryByName = (name) => {
  return async (dispatch) => {
    try {
      let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
      return dispatch({
        type: GET_COUNTRI_BY_NAME,
        payload: json.data
      })
      
    } catch (error) { console.error(error);}
  }
} */









/* 


export const getAllCountries = async (dispatch) => {
    try {
      
      const jsonResponse = await axios.get(`http://localhost:3001/countries`)

      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: jsonResponse.data
      })

    } catch (error) { console.error(error);}
};
*/











/* export const getHouse = (id) => dispatch => {
    return fetch(`http://localhost:3000/houses/${id}`)
              .then(response => response.json())
              .then(data => dispatch({type: 'GET_HOUSE', 
                                payload: data}))
};


let id = 3;

export const createHouse = (values) => {
    id++
    values.id = id;
    return{
       type: "CREATE_HOUSE",
       payload: values
     }
  }

export const deleteHouse =  (identity) => {
    return{
      type: "DELETE_HOUSE",
      payload: identity
    }
  }; */