import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import Filter from './Filter'
import CustomHits from './CustomHits'

const searchClient = algoliasearch(
  'PQMXJIQ0WY', // Application ID
  'e126b6cbf529f89108d52ad7af583a02' // Key for search query only
);

// @TODO Rendre la valeur indexName dynamic dev prod ajouter d'un fichier env

const FilterContainer = styled(Grid)`
  background-color: #ffffff;
  padding: 30px;
  height: 90vh;
  overflow: scroll;
`

const HitsContainer = styled(Grid)`
  margin-top: 30px;
  margin-bottom: 50px;
  height: 90vh;
  overflow: scroll;
`

/*
*  @description Component
*  Affichage des filtres et des résultat pour la recherche
*/
class Search extends Component {
  render() {
    return (
      <InstantSearch indexName="dev_new_models_paris" searchClient={searchClient}>
        <Grid container>
          <FilterContainer item md={3}>
            <Filter />
          </FilterContainer>
          <HitsContainer item md={9}>
            <CustomHits />
          </HitsContainer>
        </Grid>
      </InstantSearch>
    )
  }
}

export default connect()(Search);
