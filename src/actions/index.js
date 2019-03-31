
export const exampleNonAsync = () => {
  return {
    type: 'NON_ASYNC',
    payload: 1
  }
}

export const getPostsAndPhotos = () => {
  return async (dispatch, getState) => {
    await dispatch(getPosts())
    const uniqueIds = new Set(getState().posts.map((post) => post.userId));
    [...uniqueIds].forEach((id) => {
      dispatch(getPhoto(id))
    })
  }
}

export const getPosts = () => {
  return async (dispatch) => {
    const data = await window.fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())

    dispatch({
      type: 'POSTS',
      payload: data
    })
  }
}

export const getPhoto = (id) => {
  return async (dispatch) => {
    const data = await window.fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((resp) => resp.json())

    dispatch({
      type: 'PHOTO',
      payload: data
    })
  }
}
