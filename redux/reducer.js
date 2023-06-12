
import {
  SEHIR,
  A_MERKEZ_EDİT,
  A_MERKEZ_GET,
  TOGGLE,
  MERKEZ,
  A_PERSONEL,
  ETKINLIK_GET,
} from "./actions";

const initialState = {
  user: null,
  info: [],
  token: null,
  toggle: true,
  sehir: [],
  merkez: [],
  etkinlik: [],
  Personel: null,
  adminMerkez: null,
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {

  
  export function mainReducer(state = initialState, action) {
   switch (action.type) {

    case TOGGLE:
      console.log(state.toggle);
      return {
        ...state,
        toggle: !state.toggle,
      };
    case SEHIR:
      return {
        ...state,
        sehir: action.payload,
      };
    case MERKEZ:
      return {
        ...state,
        merkez: action.payload,
      };
    case A_PERSONEL:
      return {
        ...state,
        Personel: action.payload,
      };

    case A_MERKEZ_GET:

      return {
        ...state,
        adminMerkez: action.payload,
      };

        return{
          ...state, adminMerkez: action.payload}
    case GONULLU:
        return{
          ...state, gonullu: action.payload}
        
    case DANISAN:
        return{
          ...state, danisan: action.payload}
        

    case ETKINLIK_GET:
      return {
        ...state,
        etkinlik: action.payload,
      };

    default:
      return state;
  }
}
