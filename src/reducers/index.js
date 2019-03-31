import { combineReducers } from 'redux'

const posts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS':
      return action.payload
    default:
      return state
  }
}

const photos = (state = {}, action) => {
  switch (action.type) {
    case 'PHOTO':
      const clone = { ...state }
      clone[action.payload.id] = action.payload
      return clone
    default:
      return state
  }
}

export default combineReducers({
  posts,
  photos
})
