import { GET_ACTIVITIES,GET_ALL_COUNTRIES, GET_COUNTRI_BY_NAME, GET_COUNTRI_BY_ID, FILTER_BY_CONTINENT, ORDER_ASC_OR_DSC } from "../action";

const initialState = {
    allCountries: [],
    countries: [],
    oCountry: {},
    aActitivities: []
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

        case GET_COUNTRI_BY_ID:
            return {
                ...state,
                oCountry: payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                aActitivities: payload
            }
        case FILTER_BY_CONTINENT:

            const continentFiltered = filter_continent === 'ALL' ? allCountries
            : allCountries.filter(pI => pI.continent === filter_continent);
            return { 
                ...state,
                countries: continentFiltered
            }

        case ORDER_ASC_OR_DSC:
            let aTemp;
            switch (order) { 
                case "ASC":
                aTemp = countries.sort( ( a , b ) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    return 0
                });
                console.log(aTemp)

                return { 
                    ...state,
                    countries: [...aTemp]
                }

                case "DSC":
                    aTemp= countries.sort( ( a , b ) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        return 0
                    });
                    return { 
                        ...state,
                        countries: [...aTemp]
                    }
                
                default: return {...state}
                }
        default: return {...state}
    };
};
export default rootReducer;
