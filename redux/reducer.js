import { SEHIR,A_MERKEZ_EDİT,A_MERKEZ_GET,TOGGLE,MERKEZ,A_PERSONEL_EDİT } from "./actions";
const initialState = {
    user: null,
    info: [],
    token: null,
    toggle:true,
    sehir:[],
    merkez:[],
    editPersonel:[],
    adminMerkez:null
  };
  
  export function mainReducer(state = initialState, action) {
   switch (action.type) {
    case TOGGLE:
        console.log(state.toggle)
        return{
            ...state, toggle:!state.toggle 
        }
    case SEHIR:
        return{
            ...state, sehir: action.payload
        }
    case MERKEZ:
        return{
            ...state, merkez: action.payload
        }
    case A_PERSONEL_EDİT:
        return{
            ...state, editPersonel:action.payload
        }
   
    case A_MERKEZ_GET:
        return{
          ...state, adminMerkez: action.payload}
        
   
    default:
       return state;
   }
  }