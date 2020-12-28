export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.data
      }
    case 'SET_NAMES': 
    return {
      ...state,
      names: action.data
    }
    case 'SET_SORT':
      return {
        ...state,
        sort: action.data
      }
    default:
      return state;
  }
}

