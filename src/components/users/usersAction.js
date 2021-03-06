export const FETCHING_PUBLIC_USERS = 'FETCHING_PUBLIC_USERS'
export const GET_PUBLIC_USERS = 'GET_PUBLIC_USERS'
export const GET_PUBLIC_USERS_SUCCESS = 'GET_PUBLIC_USERS_SUCCESS'

export const getPublicUsers = (sex) => ({ type: GET_PUBLIC_USERS, payload: { sex }})


export const FETCHING_PUBLIC_USER = 'FETCHING_PUBLIC_USER'
export const GET_PUBLIC_USER = 'GET_PUBLIC_USER'
export const GET_PUBLIC_USER_SUCCESS = 'GET_PUBLIC_USER_SUCCESS'

export const getPublicUser = (id) => ({type : GET_PUBLIC_USER, payload: { id }})
