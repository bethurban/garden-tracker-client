const initialState = {
  name:''
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'UPDATED_DATA':
      return action.locationFormData

    default:
      return state;
  }
}
