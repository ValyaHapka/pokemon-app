const defaultState = {
  pokes: [],
  initialState: [],
  searchValue: '',
  selectedType: '',
  isLoaded: false,
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIAL_POKES':
      return { ...state, initialState: [...state.initialState, action.payload] };
    case 'ADD_POKES':
      return { ...state, pokes: [...state.pokes, action.payload] };
    case 'CLEAR_POKES':
      return { ...state, pokes: [] };
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
    case 'IS_LOADED': {
      return { ...state, isLoaded: action.payload };
    }
    default:
      return { ...state };
  }
};

export const pokesSelector = (state) => state;
export const typeSelector = (state) => state.selectedType;

export const setInitialPokes = (payload) => ({ type: 'INITIAL_POKES', payload });
export const setPokes = (payload) => ({ type: 'ADD_POKES', payload });
export const filterByType = (payload) => ({ type: 'FILTER_BY_TYPE', payload });
export const searchPokes = (payload) => ({ type: 'SEARCH_POKES', payload });
export const deleteSearchPokes = () => ({ type: 'DELETE_SEARCH_POKES' });
export const setIsLoaded = (payload) => ({ type: 'IS_LOADED', payload });
export const clearPokes = () => ({ type: 'CLEAR_POKES' });

export default filterReducer;
