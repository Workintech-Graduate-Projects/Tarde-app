import { SEHIR } from "./actions";
const initialState = {
    user: null,
    info: [],
    token: null,
    toggle:true,
    sehir:"Gaziantep"
  };
  
  export function mainReducer(state = initialState, action) {
   switch (action.type) {
    case "TOGGLE":
        return{
            ...state, toggle:!state.toggle
        }
    case SEHIR:
        return{
            ...state, sehir: action.payload
        }
   
    default:
       return state;
   }
  }