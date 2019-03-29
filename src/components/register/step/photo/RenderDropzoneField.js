import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import FormHelperText from '@material-ui/core/FormHelperText'
import styled from 'styled-components'
import { addPhoto, setCurrentPhoto, deletePhoto } from '../../registerAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Compress from 'client-compress'

const options = {
  quality: 0.75
}
const compress = new Compress(options)

const DropZoneContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`

const Label = styled.div`
  text-align: center;
  margin-top: 15px;
`

const HelperContainer = styled.div`
  text-align: center;
`

const PhotoContainer = styled.div`
  position: relative;
`

const Photo = styled.img`
  width: 100px;
  height: 100px;
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
  padding: 2px;
  top: -10px;
  right: -10px;
  font-size: 1.5rem;
  background-color: #fff;
  border-radius: 50px;
  cursor: pointer;
`

const AddAPhotoCustom = styled(AddAPhoto)`
  font-size: 40px;
  margin-top: 28px;
  margin-left: 28px;
  @media (max-width: 480px) {
    font-size: 32px;
    margin-top: 30px;
    margin-left: 30px;
  }
`

const RequiredPhoto = styled(FormHelperText)`
  display: inline;
  color: #f44336;
  ${props => props.primary ? "white" : "palevioletred"};
`

/*
*  @description Component
*  Composant permettant à l'utilisateur d'ajouter des photos
*/

class RenderDropzoneField extends Component {
  state = {
    fileIsToBig: false
  }
  render() {
    const { addPhoto, photoFraming, photos, setCurrentPhoto, deletePhoto, label, submitSucceeded, required} = this.props;
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
                        maxSize={6000000}
                        accept="image/*"
                        multiple={false}
                        name="photo"
                        onDropRejected={() => this.setState({fileIsToBig: true})}
                        onDrop={( files ) => {
                          if (files.length) {
                            this.setState({fileIsToBig: false})
                            compress.compress(files).then((conversions) => {
                              const { photo } = conversions[0]
                               const reader = new FileReader();
                               reader.onload = (event) => {
                                 addPhoto(photoFraming, file[0].preview, event.target.result)
                               };
                              reader.readAsDataURL(photo.data);
                              const file = files.map(file => Object.assign(file, {
                                preview: URL.createObjectURL(photo.data)
                              }))
                            })
                          }
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
          photoContainPreview === false && required && submitSucceeded && this.state.fileIsToBig === false ?

          <HelperContainer>
            <RequiredPhoto>Photo requise</RequiredPhoto>
          </HelperContainer>
          :
          <div style={{height: 14}}></div>
        }
        {
          this.state.fileIsToBig ?
          <HelperContainer>
            <RequiredPhoto>Taille maximum 5 mo</RequiredPhoto>
          </HelperContainer>
          :
          <div style={{height: 14}}></div>
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
    addPhoto: (photoFraming, preview, base64) => {
      dispatch(addPhoto(photoFraming, preview, base64))
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
