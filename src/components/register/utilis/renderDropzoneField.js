import React from 'react';
import Dropzone from 'react-dropzone';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import styled from 'styled-components';

const DropZoneConaitainer = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #000;
`

const AddAPhotoCustom = styled(AddAPhoto)`
  font-size: 45px;
  margin-top: 10px;
  margin-left: 10px;
`

const renderDropzoneField = ({input}) => {
  return (
      <DropZoneConaitainer>
        <Dropzone style={{}}
                  maxSize={7340032}
                  accept="image/jpg,image/png"
                  name="photo"
                  onDrop={( files ) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      this.setState(event.target.result)
                      input.onChange(event.target.result);
                    };
                  }}>
          <AddAPhotoCustom/>
        </Dropzone>
      </DropZoneConaitainer>
    )

  }

export default renderDropzoneField
