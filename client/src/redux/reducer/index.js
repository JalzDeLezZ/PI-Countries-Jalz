
import { GET_ALL_COUNTRIES, GET_COUNTRI_BY_NAME, FILTER_BY_CONTINENT, ORDER_ASC_OR_DSC } from "../action";

const initialState = {
    allCountries: [],
    countries: [],
};

const rootReducer = (state = initialState, action) => {

    const {allCountries, countries} = state
    const {type, payload, order, filter_continent} = action;    

    switch(type) {
        
        case GET_ALL_COUNTRIES:
            
            return {
                ...state,
                allCountries: payload,
                countries: payload
            } 

        case GET_COUNTRI_BY_NAME:
            return { 
                ...state,
                countries: payload
            }
        
        case FILTER_BY_CONTINENT:

            const continentFiltered = action.payload === 'ALL' ? allCountries
            : allCountries.filter(pI => pI.continent === action.payload);

            return { 
                ...state,
                countries: continentFiltered
            }
        case ORDER_ASC_OR_DSC:
            switch (order) {
                case "ASC":
                    const aTemp = countries.sort( ( a , b ) => {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        return 0
                    });
                    console.log(aTemp)

                    
                    return { 
                        ...state,
                        countries: aTemp
                    }
                
                case "DSC":
                    console.log("DDDDD")
                    const aTemp2 = countries.sort( ( a , b ) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        return 0
                    });
                    return { 
                        ...state,
                        countries: aTemp2
                    }
                
                default: return {...state}
                
                }
        default: return {...state}
    };
};
export default rootReducer;