import { combineReducers } from 'redux'

const posts = (state = [], action: any) => {
  switch (action.type) {
    case 'POSTS':
      return action.payload
    default:
      return state
  }
}

const photos = (state = {}, action: any) => {
  switch (action.type) {
    case 'PHOTO':
      const clone: any = { ...state }
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
