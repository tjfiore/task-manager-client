import { AUTH, GET_USER, GET_TASKS } from './type';
const url = 'http://localhost:3090';

export function get_sign_in_state(signedIn) {
  return {
    type: AUTH,
    signedIn
  }
}

export function get_user(user) {
  return {
    type: GET_USER,
    user
  }
}

export function get_tasks(tasks) {
  return {
    type: GET_TASKS,
    tasks
  }
}

export const signUp = data => dispatch => {
  fetch(`${url}/signup`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", res.user);
    dispatch(get_user(res.user));
    dispatch(get_sign_in_state(true));
  })
  .catch(err => console.log(`Error reported: ${err}`));
}

export const signIn = data => dispatch => {
  fetch(`${url}/signin`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", res.user);
    dispatch(get_user(res.user));
    dispatch(get_sign_in_state(true));
  })
  .catch(err => console.log(`Error reported: ${err}`));
}

export const addTask = task => dispatch => {
  fetch(`${url}/task`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(task)
  })
  .then(res => res.json())
  .then(res => {
    dispatch(get_tasks(res.tasks));
  })
  .catch(err => console.log(`Error reported: ${err}`));
}

export const getTask = () => dispatch => {
  fetch(`${url}/task`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
  .then(res => res.json())
  .then(res => {
    dispatch(get_tasks(res.tasks));
  })
  .catch(err => console.log(`Error reported: ${err}`));
}