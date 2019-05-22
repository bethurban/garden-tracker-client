const API_URL = process.env.REACT_APP_API_URL;

// Action creators

const setUser = user => {
  console.log("setting user")
  return {
    type: 'SET_USER_SUCCESS',
    user
  }
}

const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

// Async actions

export const checkUser = email => {
  console.log("Inside checkUser")
  return dispatch => {
    fetch(`${API_URL}/users`)
      .then(resp => resp.json())
      .then(users => users.find(user => user.email === email))
      .then(user => {
        if(user) {
          dispatch(setUser(user))
        } else {
          dispatch(createUser(email))
        }
      })
      .catch(error => console.log(error))
  }
}

export const createUser = email => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email})
    })
      .then(resp => resp.json())
      .then(user => dispatch(addUser(user)))
      .catch(error => console.log(error))
  }
}
