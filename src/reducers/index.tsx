import { ModifyAction } from '../store/actions';
import { DECREMENT, INCREMENT } from '../store/const';
import { combineReducers } from 'redux';

const count = (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  count
})


export default rootReducer