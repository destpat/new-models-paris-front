export const SET_FAVORITE_USER = 'SET_FAVORITE_USER'
export const setFavoriteUser = (user) => ({ type: SET_FAVORITE_USER, payload: { user }})

export const REMOVE_FAVORITE_USER = 'REMOVE_FAVORITE_USER'
export const removeFavoriteUser = (id) => ({ type: REMOVE_FAVORITE_USER, payload: { id }})

export const CREATE_ENQUIRE = 'CREATE_ENQUIRE'
export const RESET_ENQUIRE = 'RESET_ENQUIRE'
export const CREATE_ENQUIRE_SUCCESS = 'CREATE_ENQUIRE_SUCCESS'

export const createEnquire = (enquireInformations) => ({ type: CREATE_ENQUIRE, payload: { enquireInformations }})
export const resetEnquire = () => ({ type: RESET_ENQUIRE })

export const SET_ENQUIRE_MODE = 'SET_ENQUIRE_MODE'
export const setEnquireMode = (enquire) => ({type: SET_ENQUIRE_MODE, payload : { enquire }})

export const SET_MOBILE_ENQUIRE_MODE = 'SET_MOBILE_ENQUIRE_MODE'
export const setMobileEnquireMode = (enquire) => ({type: SET_MOBILE_ENQUIRE_MODE, payload : { enquire }})
