
const initialState = {
    user: null,
    info: [],
    token: null,
    toggle:true
  };
  
  export function mainReducer(state = initialState, action) {
   switch (action.type) {
    case "TOGGLE":
        return{
            ...state,toggle:!state.toggle
        }

   
    default:
       return state;
   }
  }