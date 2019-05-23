const API_URL = process.env.REACT_APP_API_URL;

export const updateLocationFormData = locationFormData => {
  return {
    type: 'UPDATED_DATA',
    locationFormData
  }
}

const addLocation = location => {
  return {
    type: 'CREATE_LOCATION_SUCCESS',
    location
  }
}

// Async actions

export const createLocation = (location, user) => {
  let l = { name : `${location}` }
  return dispatch => {
    return fetch(`${API_URL}/users/${user}/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(l)
    })
      .then(resp => resp.json())
      .then(location => {
        dispatch(addLocation(location))
      })
      .catch(error => console.log(error))
  }
}
