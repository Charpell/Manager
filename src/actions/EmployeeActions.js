import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_FIELDS_RESET,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_FIELDS_RESET })
        Actions.employeeList({ type: 'reset' })
      })
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  const uid = '8DcnfhqxH3TUf1M6N4OMqNIYLB72'

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/employees`)
      .on('value', snapshot => {
         dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      })
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { createUser } = firebase.auth();

  const uidd = '8DcnfhqxH3TUf1M6N4OMqNIYLB72'

  return (dispatch) => {
    firebase.database().ref(`/users/${uidd}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
        Actions.employeeList({ type: 'reset' })
      })
  }
};