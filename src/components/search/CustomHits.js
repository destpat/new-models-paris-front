import React from 'react'
import { connectHits } from 'react-instantsearch-dom';
import StackGrid from "react-stack-grid"
import sizeMe from 'react-sizeme'
import Hit from './Hit';

const Hits = ({ hits, size: { width }}) => (
  <StackGrid gutterWidth={width <= 480 ? 10 : 15}
             gutterHeight={5}
             columnWidth={width <= 480 ? 160 : 240}>
    {
      hits.map((hit, index) => {
        return (
          <Hit key={index} hit={hit}/>
        )
      })
    }
  </StackGrid>
);

const CustomHits = connectHits(Hits);

export default sizeMe()(CustomHits)
