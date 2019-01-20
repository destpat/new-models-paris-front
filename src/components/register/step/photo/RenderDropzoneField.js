import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import FormHelperText from '@material-ui/core/FormHelperText'
import styled from 'styled-components'
import { addPhoto, setCurrentPhoto, deletePhoto } from '../../registerAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DropZoneContainer = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid #000;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`

const PhotoContainer = styled.div`
  position: relative;
`

const Photo = styled.img`
  width: 130px;
  height: 130px;
  object-fit: scale-down;
  cursor: pointer;
  background-color: #eeeeee;
  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1.5rem;
  background-color: #fff;
  border-radius: 50px;
  cursor: pointer;
`

const AddAPhotoCustom = styled(AddAPhoto)`
  font-size: 40px;
  margin-top: 44px;
  margin-left: 44px;
  @media (max-width: 480px) {
    font-size: 32px;
    margin-top: 30px;
    margin-left: 30px;
  }
`

const Label = styled.div`
  text-align: center;
  margin-top: 15px;
`

const HelperContainer = styled.div`
  text-align: center;
`

const RequiredPhoto = styled(FormHelperText)`
  display: inline;
  color: #f44336;
`

/*
*  @description Component
*  Composant permettant à l'utilisateur d'ajouter des photos
*/

class RenderDropzoneField extends Component {
  render() {
    const { addPhoto, photoFraming, photos, setCurrentPhoto, deletePhoto, label, submitSucceeded } = this.props;
    let photoContainPreview = !!photos.find(photo => photo.photoFraming === photoFraming).preview;
    return (
      <div>
       {
          photoContainPreview ?
          <PhotoContainer>
            <CustomFontAwesomeIcon icon={['fas', 'times-circle']}
                                   onClick={() => deletePhoto(photoFraming)}/>
            <Photo src={photos.find(photo => photo.photoFraming === photoFraming).preview}
                   alt="models"
                   onClick={() => setCurrentPhoto(photoFraming)}/>
          </PhotoContainer>
          :
          <div>
            <DropZoneContainer>
              <Dropzone style={{}}
                        maxSize={7340032}
                        accept="image/*"
                        multiple={false}
                        name="photo"
                        onDrop={( files ) => {
                          const file = files.map(file => Object.assign(file, {
                            preview: URL.createObjectURL(file)
                          }))
                          addPhoto(photoFraming, file[0].preview)
                        }}>
                <AddAPhotoCustom/>
              </Dropzone>
            </DropZoneContainer>
          </div>
        }
        <Label>
          <span>{label}</span>
        </Label>
        {
          // Affihcage du message d'erreur seulement si le formulaire est submit
          photoContainPreview === false && submitSucceeded ?

          <HelperContainer>
            <RequiredPhoto>Photo requise</RequiredPhoto>
          </HelperContainer>
          :
          ''
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.register.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoto: (photoFraming, preview) => {
      dispatch(addPhoto(photoFraming, preview))
    },
    setCurrentPhoto: (photoFraming) => {
      dispatch(setCurrentPhoto(photoFraming))
    },
    deletePhoto: (photoFraming) => {
      dispatch(deletePhoto(photoFraming))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderDropzoneField)
