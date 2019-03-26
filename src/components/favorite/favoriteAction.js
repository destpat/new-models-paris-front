export const SET_FAVORITE_USER = 'SET_FAVORITE_USER'
export const setFavoriteUser = (user) => ({ type: SET_FAVORITE_USER, payload: { user }})

export const REMOVE_FAVORITE_USER = 'REMOVE_FAVORITE_USER'
export const removeFavoriteUser = (id) => ({ type: REMOVE_FAVORITE_USER, payload: { id }})

export const CREATE_ENQUIRE = 'CREATE_ENQUIRE';
export const CREATE_ENQUIRE_SUCCESS = 'CREATE_ENQUIRE_SUCCESS'

export const createEnquire = (enquireInformations) => ({ type: CREATE_ENQUIRE, payload: { enquireInformations }})
