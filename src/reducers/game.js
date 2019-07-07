const initialState = {
  gameId: '',
  mode: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GAME_ID':
      return {
        ...state,
        gameId: action.payload
      };
    case 'SET_GAME_MODE':
      return {
        ...state,
        mode: action.payload
      };
    default:
      return state;
  }
};
