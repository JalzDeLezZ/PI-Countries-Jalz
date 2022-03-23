import { 
    GET_ACTIVITIES,
    GET_ALL_COUNTRIES, 
    GET_COUNTRI_BY_NAME, 
    GET_COUNTRI_BY_ID, 
    FILTER_BY_CONTINENT,
    FILTER_GENERAL,
    FILTER_BY_ACTIVITY
} from "../action";

const initialState = {
    allCountries: [],
    allCountryXActiv: [],
    countries: [],
    oCountry: {},
    aActitivities: []
};

let aTemp;

const rootReducer = (state = initialState, action) => {

    const {allCountries, countries} = state
    const {type, payload,   filter_continent,  slctFilt, rbtFilt, filter_activity} = action;

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
        case FILTER_BY_ACTIVITY:
            console.log(filter_activity)
            console.log(payload)

            const aTemp2 = payload.filter(pI => pI.Activities.length > 0)
            console.log(aTemp2)
            
            const aTemp3 = aTemp2.filter(
                pI => pI.Activities.filter(
                    pJ => pJ.name===filter_activity).length
                )
            console.log(aTemp3)

             return {
                ...state,
                countries: aTemp3
            }
        case FILTER_GENERAL:

            if ((rbtFilt && !slctFilt) || (slctFilt === 'alphabet')) {
                switch (rbtFilt) { 
                    case "ASC":
                    aTemp = countries.sort( ( a , b ) => {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        return 0
                    });
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
            }
            else if ((slctFilt  === 'population') && rbtFilt){
                    if(!rbtFilt || rbtFilt === "ASC"){
                        aTemp = countries.sort((a,b) => {
                            if(a.poblacion < b.poblacion)
                                return -1
                            if (a.poblacion > b.poblacion) {
                                return 1
                            }
                            return 0
                        })
                        return {
                            ...state,
                            countries: [...aTemp]
                        } 
                    }
                    else if(rbtFilt === "DSC"){
                        aTemp = countries.sort((a,b) => {
                            if(a.poblacion > b.poblacion)
                                return -1
                            if (a.poblacion < b.poblacion) {
                                return 1
                            }
                            return 0
                        })
                        return {
                            ...state,
                            countries: [...aTemp]
                        } 
                    }
                    else{
                        return {...state}
                    }
            }
            else{
                return {...state}
            } 
        default: return {...state}
    };
};
export default rootReducer;