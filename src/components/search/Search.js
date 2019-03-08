import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { InstantSearch } from 'react-instantsearch-dom'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Sex from './filter/Sex'
import Age from './filter/Age'
import Region from './filter/Region'
import Clothe from './filter/Clothe'
import Project from './filter/Project'
import HairsColors from './filter/HairsColors'
import EyesColor from './filter/EyesColor'
import algoliasearch from 'algoliasearch/lite'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.2em;
  font-weight: 400;
  color: #484848;
`

const Container = styled(Grid)`
  background-color: #ffffff;
  padding: 30px;
  height: 90vh;
  overflow: scroll;
`

const searchClient = algoliasearch(
  'PQMXJIQ0WY', // Application ID
  'e126b6cbf529f89108d52ad7af583a02' // Key for search query only
);

/*
*  @description Component
*  Affichage des filtres et des résultat pour la recherche
*/
class Search extends Component {
  render() {
    return (
      <InstantSearch indexName="dev_new_models_paris" searchClient={searchClient}>
        <Container container item md={3}>
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
        </Container>
      </InstantSearch>
    )
  }
}

export default connect()(Search);
