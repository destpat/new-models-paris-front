import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';

import Sex from './filter/Sex'
import Age from './filter/Age'
import Height from './filter/Height'
import Region from './filter/Region'
import Clothe from './filter/Clothe'
import Project from './filter/Project'
import HairsColors from './filter/HairsColors'
import EyesColor from './filter/EyesColor'

import ClearRefinements from './filter/utilis/ClearRefinements'
import styled from 'styled-components'

const CustomDialog = styled(Dialog)`
  -webkit-overflow-scrolling: touch;
`

const FilterContainer = styled.div`
  padding: 0px 10px 40px 10px
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

const Transition = (props) => {
  const duration = {
    enteringScreen: 250,
    leavingScreen: 200
  }
  return <Slide {...props} direction="up" timeout={{ enter: duration.enteringScreen, exit: duration.leavingScreen}}/>;
}


const Filters = ({handleCloseMobileFilter}) => {
  return (
    <div>
      <CustomAppBar >
        <CustomToolbar>
          <CustomFilterButton onClick={handleCloseMobileFilter}>
            Annuler
          </CustomFilterButton>
          <ClearRefinements/>
        </CustomToolbar>
      </CustomAppBar>
      <FilterContainer>
        <Sex/>
        <Divider variant="middle"/>
        <Age />
        <Divider variant="middle"/>
        <Height/>
        <Divider variant="middle"/>
        <Region/>
        <Divider variant="middle"/>
        <Clothe/>
        <Divider variant="middle"/>
        <Project/>
        <Divider variant="middle"/>
        <HairsColors/>
        <Divider variant="middle"/>
        <EyesColor/>
        <Divider variant="middle"/>
      </FilterContainer>
    </div>
  )
}

class MobileFilter extends Component {
  render() {
    const { handleCloseMobileFilter, open } = this.props;
    return (
      <div>
        <CustomDialog
          id="targetElementId"
          fullScreen
          keepMounted={true}
          open={open}
          onClose={handleCloseMobileFilter}
          TransitionComponent={Transition}>
          <Filters handleCloseMobileFilter={handleCloseMobileFilter}/>
        </CustomDialog>
      </div>
    );
  }
}

export default MobileFilter;
