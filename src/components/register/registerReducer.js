import {
  ADD_PHOTO,
  SET_CURRENT_PHOTO,
  DELETE_PHOTO,
  SET_NEXT_STEP
} from './registerAction';

const initialState = {
  currentStep: 0,
  isFetching: false,
  successSignUp: false,
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
    case SET_NEXT_STEP:
      return {
        ...state,
        currentStep: action.payload.step
      }
    case ADD_PHOTO:
      const updatedPhoto = state.photos.map(photo => {
         if (photo.photoFraming === action.payload.photoFraming) {
           return {
             ...photo,
             ...action.payload
           }
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
      const deletedPhoto = state.photos.map(photo => {
         if (photo.photoFraming === action.payload.photoFraming) {
           return {
             ...photo,
             preview: ''
           }
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
