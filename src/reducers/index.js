import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmplyeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
})