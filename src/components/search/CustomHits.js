import React from 'react'
import { connectHits } from 'react-instantsearch-dom';
import sizeMe from 'react-sizeme'
import UsersGrid from '../users/grid/UsersGrid'

const Hits = ({ hits, size: { width }}) => (
  <UsersGrid users={hits} type='search' />
);

const CustomHits = connectHits(Hits);

export default sizeMe()(CustomHits)
