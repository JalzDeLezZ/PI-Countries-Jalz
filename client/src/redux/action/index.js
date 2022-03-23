const axios = require('axios');

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'; 
export const GET_COUNTRI_BY_NAME = 'GET_COUNTRI_BY_NAME'; 
export const GET_COUNTRI_BY_ID = 'GET_COUNTRI_BY_ID'; 
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'; 
export const ORDER_ASC_OR_DSC = 'ORDER_ASC_OR_DSC'; 
export const GET_ACTIVITIES = 'GET_ACTIVITIES'; 
export const POST_ACTIVITIES_X_COUNTRIES = 'POST_ACTIVITIES_X_COUNTRIES'; 
export const POBLATION_ALPHABET = 'POBLATION_ALPHABET'; 
export const FILTER_GENERAL = 'FILTER_GENERAL'; 
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY'; 

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

export const getCountryById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: GET_COUNTRI_BY_ID,
        payload: response.data
      })
    } catch (error) { console.error(error) }
  }
}

export const getActivities = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/activity`)
      return dispatch({
        type: GET_ACTIVITIES,
        payload: response.data
      })
    } catch (error) { console.error(error) }
  }
}

export const postActivitiesXcountries = (dataForm) => {
  return async (dispatch) => {
    try {
      console.log("ACTION- DATAFORM",dataForm)
      const response = await axios.post(`http://localhost:3001/activity/1`,dataForm)
      return response
    } catch (error) { console.error(error) }
  }
}

export function filterCountriesByContinent (filter_continent){
  return {
    type: FILTER_BY_CONTINENT,
    filter_continent
  }
}

export function filtGeneral (slctFilt, rbtFilt){
  return {
    type: FILTER_GENERAL,
    slctFilt,
    rbtFilt
  }
}

export function filterByActivity (filter_activity){
  return async (dispatch) => {
    try {
      const jsonResponse = await axios.get(`http://localhost:3001/countries/activities`);
      dispatch({
        type: FILTER_BY_ACTIVITY,
        payload: jsonResponse.data,
        filter_activity
      })
    } catch (error) { console.error(error);}
  }
}