export const FETCHING_PUBLIC_USERS = 'FETCHING_PUBLIC_USERS'
export const GET_PUBLIC_USERS = 'GET_PUBLIC_USERS'
export const GET_PUBLIC_USERS_SUCCESS = 'GET_PUBLIC_USERS_SUCCESS'
export const getPublicUsers = (sex) => ({ type: GET_PUBLIC_USERS, payload: { sex }})
