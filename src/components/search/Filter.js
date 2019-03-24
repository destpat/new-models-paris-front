import React, { Component } from 'react'
import { connect }  from 'react-redux'

import Divider from '@material-ui/core/Divider'

import Sex from './filter/Sex'
import Height from './filter/Height'
// import Age from './filter/Age'
import Region from './filter/Region'
import Clothe from './filter/Clothe'
import Project from './filter/Project'
import HairsColors from './filter/HairsColors'
import EyesColor from './filter/EyesColor'

import ClearRefinements from './filter/utilis/ClearRefinements'

import styled from 'styled-components'

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #484848;
`

const Container = styled.div`
  height: calc(100vh - 155px);
  overflow: scroll;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

/*
*  @description Component
*  Affichage des filtres et des résultat pour la recherche
*/
class Search extends Component {
  render() {
    return (
      <div>
        <TitleContainer>
          <Title>Filtres</Title>
          <ClearRefinements/>
        </TitleContainer>
        <Divider/>
        <Container>
          <Sex/>
          <Divider variant="middle"/>
          <Height/>
          <Divider variant="middle"/>
          <Region/>
          <Divider variant="middle"/>
          <Clothe/>
          <Divider variant="middle" />
          <Project/>
          <Divider variant="middle" />
          <HairsColors/>
          <Divider variant="middle" />
          <EyesColor/>
        </Container>
      </div>
    )
  }
}

export default connect()(Search);
