import React, { Component } from 'react'
import { connect }  from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Sex from './filter/Sex'
import Age from './filter/Age'
import Region from './filter/Region'
import Clothe from './filter/Clothe'
import Project from './filter/Project'
import HairsColors from './filter/HairsColors'
import EyesColor from './filter/EyesColor'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.2em;
  font-weight: 400;
  color: #484848;
`

/*
*  @description Component
*  Affichage des filtres et des résultat pour la recherche
*/
class Search extends Component {
  render() {
    return (
      <div>
        <Grid item md={12}>
          <Title>Filtres</Title>
          <Divider/>
        </Grid>

        <Grid item md={12}>
          <Sex />
          <Divider variant="middle"/>
        </Grid>

        <Grid item md={12}>
          <Age />
          <Divider variant="middle"/>
        </Grid>

        <Grid item md={12}>
          <Region/>
          <Divider variant="middle"/>
        </Grid>

        <Grid item md={12}>
          <Clothe/>
          <Divider variant="middle" />
        </Grid>

        <Grid item md={12}>
          <Project/>
          <Divider variant="middle" />
        </Grid>

        <Grid item md={12}>
          <HairsColors/>
          <Divider variant="middle" />
        </Grid>

        <Grid item md={12}>
          <EyesColor/>
        </Grid>
      </div>
    )
  }
}

export default connect()(Search);
