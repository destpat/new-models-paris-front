import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import EnquireForm from './EnquireForm';

import styled from 'styled-components'

const CustomDialog = styled(Dialog)`
  -webkit-overflow-scrolling: touch;
`

const CustomAppBar = styled(AppBar)`
  position: sticky;
  box-shadow: none;
  border-bottom: 1px solid #e0e0e0;
`
const CustomToolbar = styled(Toolbar)`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`
const CustomFilterButton = styled(Button)`
 text-transform: none;
 color: #737373;
`

const EnquireContainer = styled.div`
  margin-top: 6%;
`

const Transition = (props) => {
  const duration = {
    enteringScreen: 250,
    leavingScreen: 200
  }
  return <Slide {...props} direction="up" timeout={{ enter: duration.enteringScreen, exit: duration.leavingScreen}}/>;
}


class MobileEnquireForm extends Component {
  render() {
    const { handleCloseMobileEnquireForm, open } = this.props;
    return (
      <div>
        <CustomDialog
          id="targetElementId"
          fullScreen
          keepMounted={true}
          open={open}
          onClose={handleCloseMobileEnquireForm}
          TransitionComponent={Transition}>
          <CustomAppBar >
            <CustomToolbar>
              <CustomFilterButton onClick={handleCloseMobileEnquireForm}>
                Fermer
              </CustomFilterButton>
            </CustomToolbar>
          </CustomAppBar>
          <EnquireContainer>
            <EnquireForm />
          </EnquireContainer>
        </CustomDialog>
      </div>
    );
  }
}

export default MobileEnquireForm;
