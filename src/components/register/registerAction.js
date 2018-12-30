export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const createUser = (data) => ({ type: CREATE_USER_REQUEST, payload: {name: 'antoine'} })

export const ADD_PHOTO = 'ADD_PHOTO';

export const addPhoto = (photoFraming, preview) => ({ type: ADD_PHOTO, payload: { photoFraming, preview } })

export const SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO'

export const setCurrentPhoto = (photoFraming) => ({ type: SET_CURRENT_PHOTO, payload: { photoFraming } })

export const DELETE_PHOTO = 'DELETE_PHOTO'

export const deletePhoto = (photoFraming) => ({ type: DELETE_PHOTO, payload: { photoFraming }})
