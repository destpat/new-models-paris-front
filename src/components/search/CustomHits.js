import React from 'react'
import { connectHits } from 'react-instantsearch-dom'
import sizeMe from 'react-sizeme'
import UsersGrid from '../users/grid/UsersGrid'
import CustomPagination from './filter/utilis/Pagination'

import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Loading from './Loading'

const PaginationContainer = styled(Grid)`
  padding: 30px 50px 20px 0px;
  @media(max-width: 480px) {
    padding: 30px 0px 25px 0px;
  }
`

const Hits = ({ hits, size: { width } }) => (
  <div>
    <Loading width={width}>
      <UsersGrid users={hits} type='search'/>
    </Loading>
    <PaginationContainer
      container
      direction="row"
      justify="center"
      alignItems="center">
      <CustomPagination />
    </PaginationContainer>
  </div>
);

const CustomHits = connectHits(Hits);

export default sizeMe()((CustomHits))
