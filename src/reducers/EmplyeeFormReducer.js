import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_FIELDS_RESET,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case EMPLOYEE_FIELDS_RESET:
      return INITIAL_STATE;
    default:
      return state
  }
}