const initialState = {
  name: "anonim",
};

export function userReducer(state = initialState, action) {
  switch(action.type){
    case 'VERIFICATE_USER': 
      return { ...state, name: action.payload };
    case 'LOCAL_USER':
      return { ...state, name: action.payload };
    case 'LOGOUT_USER':
      return { ...state, name: action.payload };
    default: return state;
  }
}
