import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); OR
      return [action.payload.data, ...state];
  }
  console.log('action recived', action);
  return state;
}
