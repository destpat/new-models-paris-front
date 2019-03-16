import {
  ADD_PHOTO,
  SET_CURRENT_PHOTO,
  DELETE_PHOTO,
  SET_NEXT_STEP,
  SINGNUP_LOADING,
  CREATE_USER_SUCCESS
} from './registerAction';

const initialState = {
  currentStep: 0,
  isFetching: false,
  successSignUp: false,
  photos: [
    {
      photoFraming: 'photo1',
      preview: '',
      base64: ''
    },
    {
      photoFraming: 'photo2',
      preview: '',
      base64: ''
    },
    {
      photoFraming: 'photo3',
      preview: '',
      base64: ''
    }
  ],
  currentPhoto: 'photo1',
  singnupLoading: true,
  singnupSuccess: false
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        singnupLoading: false,
        singnupSuccess: true
      }
    case SINGNUP_LOADING:
      return {
        ...state,
        singnupLoading: action.payload.loading,
      }
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
             preview: '',
             base64: ''
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
