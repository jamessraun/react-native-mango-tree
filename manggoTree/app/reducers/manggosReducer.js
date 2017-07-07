const initialState = {
  age :0,
  fruits:0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_AGE': {
      return {...state,age:state.age+action.payload}; break; }

    case 'HARVEST': {
      return {...state,fruits:action.payload}; break; }

    default: { return state; break; }
  }
}
