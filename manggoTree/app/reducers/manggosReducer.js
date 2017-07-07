const initialState = {
  owner_name:'',
  tree_name:'',
  age :0,
  fruits:0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE': {
      return {...state,owner_name:action.payload.owner_name,tree_name:action.payload.tree_name}; break; }
    case 'ADD_AGE': {
      return {...state,age:state.age+action.payload}; break; }
    case 'HARVEST': {
      return {...state,fruits:action.payload}; break; }

    default: { return state; break; }
  }
}
