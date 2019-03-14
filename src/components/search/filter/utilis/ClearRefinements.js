import React from 'react';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import styled from 'styled-components';

const CustomFilterButton = styled(Button)`
 text-transform: none;
 color: #737373;
`

const RefreshIconCustom = styled(RefreshIcon)`
  margin-right: 10px;
  font-size: 18px;
  margin-top: 2px;
`

const ClearRefinements = ({ items, refine }) => (
  <CustomFilterButton onClick={() => refine(items)} disabled={!items.length}>
    <RefreshIconCustom/>
    Réinitialiser
  </CustomFilterButton>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export default CustomClearRefinements
