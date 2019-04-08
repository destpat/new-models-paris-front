import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { InstantSearch } from 'react-instantsearch-dom'
import sizeMe from 'react-sizeme'

import CustomPagination from './filter/utilis/Pagination'
import algoliasearch from 'algoliasearch/lite'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Filter from './Filter'
import MobileFilter from './MobileFilter'
import CustomHits from './CustomHits'
import CustomStateResults from './CustomStateResults'

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import qs from 'qs';

const searchClient = algoliasearch(
  'PQMXJIQ0WY', // Application ID
  'e126b6cbf529f89108d52ad7af583a02' // Key for search query only
);

// @TODO Rendre la valeur indexName dynamic dev prod ajouter d'un fichier env

const FilterContainer = styled(Grid)`
  background-color: #ffffff;
  padding: 5px 20px 10px 20px;
  display: block;
  @media(max-width: 959px) {
    display: none
  }
`

const MobileFilterContainer = styled(Grid)`
  display: none
  @media(max-width: 959px) {
    display: block;
  }
`

const HitsContainer = styled(Grid)`
  margin-top: 30px;
  @media(max-width: 480px) {
    margin-top: 15px;
  }
  height: calc(100vh - 150px);
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`
const PaginationContainer = styled(Grid)`
  padding: 0px 50px 50px 0px;
`

const ButtonOpenMobileFilter = styled(Button)`
  position: fixed;
  border-radius: 0px;
  min-height: 46px;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 1301;
`

/*
*  @description Component
*  Ajout des filtres dans l'url
*/
const updateAfter = 400;
const createURL = state => `?${qs.stringify(state)}`;
const searchStateToUrl = (props, searchState) =>
  searchState ? `${props.location.pathname}${createURL(searchState)}` : '';
const urlToSearchState = location => qs.parse(location.search.slice(1));

/*
*  @description Component
*  Affichage des filtres et des résultat pour la recherche
*/
class Search extends Component {
  state = {
    mobileFilterOpen: false,
    searchState: urlToSearchState(this.props.location)
  };

  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('#targetElementId');
  }

  handleCloseMobileFilter = () => {
    enableBodyScroll(this.targetElement);
    this.setState({ mobileFilterOpen: false })
  }

  handleMobileFilter = () => {
    disableBodyScroll(this.targetElement);
    this.setState({ mobileFilterOpen: true })
  };

  componentWillReceiveProps(props) {
    if (props.location !== this.props.location) {
      this.setState({ searchState: urlToSearchState(props.location) });
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  onSearchStateChange = searchState => {
    clearTimeout(this.debouncedSetState)
    this.debouncedSetState = setTimeout(() => {
      this.props.history.push(
        searchStateToUrl(this.props, searchState),
        searchState
      )
    }, updateAfter)
    this.setState({ searchState })
  }

  render() {
    const { size: { width } } = this.props;
    return (
      <InstantSearch indexName={process.env.REACT_APP_STAGE === "dev" ? "dev_new_models_paris" : "prod_new_models_paris"}
                     searchClient={searchClient}
                     searchState={this.state.searchState}
                     onSearchStateChange={this.onSearchStateChange}
                     createURL={createURL}>
        <Grid container>

          <MobileFilterContainer width={width}>
            <MobileFilter open={this.state.mobileFilterOpen}
                          handleCloseMobileFilter={this.handleCloseMobileFilter}
                          />
            <ButtonOpenMobileFilter variant="contained"
                                    color="primary"
                                    onClick={this.state.mobileFilterOpen ? this.handleCloseMobileFilter : this.handleMobileFilter}>
              { this.state.mobileFilterOpen ? <CustomStateResults/> : "Filtre" }
            </ButtonOpenMobileFilter>
          </MobileFilterContainer>

          <FilterContainer item md={3} xs={3} width={width}>
            <Filter />
          </FilterContainer>

          <HitsContainer item md={9} xs={12} id="hits-container">
            <CustomHits />
            <PaginationContainer
              container
              direction="row"
              justify="flex-end"
              alignItems="center">
              <CustomPagination />
            </PaginationContainer>
          </HitsContainer>
        </Grid>
      </InstantSearch>
    )
  }
}

export default sizeMe()(connect()(Search));
