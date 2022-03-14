
import { GET_ALL_COUNTRIES } from "../action";


const initialState = {
    houses: [],
    house: {},
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_ALL_HOUSES:
            if (state.houses.length === 0) {
                return {...state, houses: action.payload}
            }
            else{
                return{
                    ...state,
                }
            }; 
        case GET_HOUSE:
            return{
                ...state,
                house: action.payload
            }; 
        case CREATE_HOUSE:
           return{
               ...state,
               houses: [...state.houses, action.payload]
           }; 
        case DELETE_HOUSE:
            return{
                ...state,
                houses: state.houses.filter(u => u.id !== action.payload)
            }; 
        default: return {...state}
       
    };
};

export default rootReducer;