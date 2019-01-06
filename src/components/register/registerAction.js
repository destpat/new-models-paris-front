export const SIGNUP_REQUEST = 'SIGNUP_REQUEST' // TODO DELETE

export const SET_NEXT_STEP = 'SET_NEXT_STEP'
export const setNextStep = (step) => ({type: SET_NEXT_STEP, payload: { step }})

export const ADD_PHOTO = 'ADD_PHOTO'
export const addPhoto = (photoFraming, preview) => ({ type: ADD_PHOTO, payload: { photoFraming, preview } })

export const SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO'
export const setCurrentPhoto = (photoFraming) => ({ type: SET_CURRENT_PHOTO, payload: { photoFraming } })

export const DELETE_PHOTO = 'DELETE_PHOTO'
export const deletePhoto = (photoFraming) => ({ type: DELETE_PHOTO, payload: { photoFraming }})
