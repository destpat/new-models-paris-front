import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';

import Sex from './filter/Sex'
import Age from './filter/Age'
import Region from './filter/Region'
import Clothe from './filter/Clothe'
import Project from './filter/Project'
import HairsColors from './filter/HairsColors'
import EyesColor from './filter/EyesColor'

import ClearRefinements from './filter/ClearRefinements'

import styled from 'styled-components'

const FilterContainer = styled.div`
  padding: 0px 10px 40px 10px
`

const CustomAppBar = styled(AppBar)`
  position: sticky;
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
function Transition(props) {
  const duration = {
    enteringScreen: 3000,
    leavingScreen: 3000
  }
  return <Slide direction="right" timeout={{ enter: duration.enteringScreen, exit: duration.leavingScreen}} {...props} />;
}


class MobileFilter extends Component {
  render() {
    const { handleMobileFilter, open} = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          keepMounted={true}
          open={open}
          onClose={handleMobileFilter}
          TransitionComponent={Transition}>
          <CustomAppBar >
            <CustomToolbar>
              <CustomFilterButton onClick={handleMobileFilter}>
                Annuler
              </CustomFilterButton>
              <ClearRefinements/>
            </CustomToolbar>
          </CustomAppBar>
          <FilterContainer>
            <Sex/>
            <Divider variant="middle"/>
            <Age/>
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
        </Dialog>
      </div>
    );
  }
}

export default MobileFilter;
