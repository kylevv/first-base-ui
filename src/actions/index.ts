
export const exampleNonAsync = () => {
  return {
    type: 'NON_ASYNC',
    payload: 1
  }
}

export const getPostsAndPhotos = () => {
  return async (dispatch: any, getState: any) => {
    await dispatch(getPosts())
    const uniqueIds = new Set(getState().posts.map((post: any) => post.userId));
    [...uniqueIds].forEach((id: any) => {
      dispatch(getPhoto(id))
    })
  }
}

export const getPosts = () => {
  return async (dispatch: any) => {
    const data = await window.fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())

    dispatch({
      type: 'POSTS',
      payload: data
    })
  }
}

export const getPhoto = (id: number) => {
  return async (dispatch: any) => {
    const data = await window.fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((resp) => resp.json())

    dispatch({
      type: 'PHOTO',
      payload: data
    })
  }
}
