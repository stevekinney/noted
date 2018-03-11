const initialState =
  {
    1: {
      title: 'Hello World',
      body: 'Lorem ipsum'
    },
    2: {
      title: 'Hello World',
      body: '**Lorem** ipsum'
    },
    3: {
      title: 'Hello World',
      body: 'Lorem ipsum'
    }
  };

export default (state = initialState, action) => {
  if (action.type === 'UPDATE_NOTE_CONTENT') {
    const { id, content } = action;
    const previous = state[id];
    const updated = { ...previous, body: content };
    const newState = { ...state, [id]: updated };
    return newState;
  }

  return state;
};
