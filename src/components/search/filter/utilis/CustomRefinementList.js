import React from 'react';
import { Category } from '../style';
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { connectRefinementList } from 'react-instantsearch-dom'
import styled from 'styled-components';

const FormGroupCustom = styled(FormGroup)`
  margin-right: -14px;
`

const CustomRefinementList = connectRefinementList(
  ({ values, currentRefinement, items, refine, categoryLabel }) => (
    <div>
      <Category>{categoryLabel}</Category>
      <FormControl>
      {
        values.map((staticItem, index) => {
        const { isRefined, count } = items.find(
         item => item.label === staticItem.value
       ) || {
         isRefined: false
        };
        return (
          <FormGroupCustom key={index}>
            {
              count > 0 ?
              <FormControlLabel label={`${staticItem.label} (${count ? count : 0 })` }
                control={
                  <Checkbox checked={isRefined}
                    value={staticItem.value}
                    onChange={event => {
                      const value = event.currentTarget.value;
                      const next = currentRefinement.includes(value)
                      ? currentRefinement.filter(current => current !== value)
                      : currentRefinement.concat(value);
                      refine(next);
                    }}/>
                  }/>
                :
              ''
            }
          </FormGroupCustom>
        );
      })}
      </FormControl>
    </div>
  )
);

export default CustomRefinementList
