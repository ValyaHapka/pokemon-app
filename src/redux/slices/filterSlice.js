const defaultState = {
  pokes: [],
  initialState: [],
  searchValue: '',
  selectedType: '',
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIAL_POKES':
      return { ...state, initialState: [...state.initialState, action.payload] };
    case 'ADD_POKES':
      return { ...state, pokes: [...state.pokes, action.payload] };
    case 'FILTER_BY_TYPE':
      const result = { ...state, selectedType: action.payload };
      const pokesArr = state.initialState.filter((poke) => {
        if (result.selectedType === 'All') {
          return state.initialState;
        }
        if (poke.types.length > 1) {
          return (
            poke.types[0].type.name === result.selectedType ||
            poke.types[1].type.name === result.selectedType
          );
        } else {
          return poke.types[0].type.name === result.selectedType;
        }
      });
      return { ...result, pokes: pokesArr };
    case 'SEARCH_POKES': {
      const result = { ...state, searchValue: action.payload };
      const newArr = state.initialState.filter((p) =>
        p.name.toLowerCase().includes(state.searchValue.toLowerCase()),
      );
      return { ...result, pokes: newArr };
    }
    case 'DELETE_SEARCH_POKES': {
      return { ...state, pokes: state.initialState, searchValue: '' };
    }
    default:
      return { ...state };
  }
};
export default filterReducer;