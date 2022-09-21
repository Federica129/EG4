//1 creare state e funzini reducer
//2 (index.js) Provider al padre mandando con "store" lo stato + import di entrambi
//3 Creare e importare createStore qui
//4 (app) useSelector e useDispatch dove vuoi applicare la funzione

import { createStore, combineReducers } from "redux";

const init = {
  count: {
    value: 0,
  },
  user: {
    name: "Nessuno",
  },
};

const reducerCount = (state = {}, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(state);
      //return { ...state, count: { value: state.count.value + 1 } }; quando non avevo reducerUser
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

const reducerUser = (state = {}, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({ count: reducerCount, user: reducerUser });
const store = createStore(reducer, init);

export default store;
