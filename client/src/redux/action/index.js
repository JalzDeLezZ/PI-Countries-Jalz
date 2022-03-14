const axios = require('axios').default;

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'; 


export const getAllCountries = async (dispatch) => {
    try {
      
      const jsonResponse = await axios.get(`http://localhost:3001/countries`)

      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: jsonResponse.data
      })      


    } catch (error) { console.error(error);}
};


























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