import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  ADD_PHOTO,
  SET_CURRENT_PHOTO,
  DELETE_PHOTO
} from './registerAction';

const initialState = {
  isFetching: false,
  successCreateUser: false,
  photos: [
    {
      photoFraming: 'test1',
      preview: ''
    },
    {
      photoFraming: 'test2',
      preview: ''
    },
    {
      photoFraming: 'test3',
      preview: ''
    }
  ],
  currentPhoto: 'test1'
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        successCreateUser: true
      }
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        successCreateUser: false,
        errorMessage: action.data.errorMessage
      }
    case ADD_PHOTO:
      const updatedPhoto = state.photos.map(photo => {
         if (photo.photoFraming === action.payload.photoFraming) {
           return { ...photo, ...action.payload }
         }
         return photo
       })
       return { ...state,
                photos: updatedPhoto,
                currentPhoto: action.payload.photoFraming
              }
    case SET_CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.payload.photoFraming
      }
    case DELETE_PHOTO:
    console.log('inside delete photo');
      const deletedPhoto = state.photos.map(photo => {
         if (photo.photoFraming === action.payload.photoFraming) {
           return { ...photo, preview: '' }
         }
         return photo
       })
       return { ...state,
                photos: deletedPhoto,
                currentPhoto: action.payload.photoFraming
              }
    default:
      return state
  }
}

export default registerReducer
