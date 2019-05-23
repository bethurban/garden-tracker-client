export default (state = [], action) => {
  switch(action.type) {

    case 'GET_LOCATIONS_SUCCESS':
      return action.locations;

    case 'CREATE_LOCATION_SUCCESS':
      return state.concat(action.location);

    case 'DELETE_LOCATION':
      const locationId = action.location
      return state.filter(location => location.id !== locationId)

    default:
      return state;
  }
}
