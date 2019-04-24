import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom';
import ContentLoader from "react-content-loader"
import StackGrid from 'react-stack-grid'
import { StackGridContainer, getGutterWidth, getWidth} from '../users/grid/style'

const Loading = ({searchResults, isSearchStalled, children , width }) => {
  let array;
  searchResults ? array = Array(searchResults.hits.length).fill(0) : array = Array(8).fill(0);
  return (
    isSearchStalled ?
      <StackGridContainer>
        <StackGrid gutterWidth={getGutterWidth(width, 'search')}
                   gutterHeight={5}
                   columnWidth={getWidth(width)}>
         {
           array.map((element, index) => (
             <ContentLoader
               key={index}
               height={300}
               width={240}
               speed={2}
               primaryColor="#ededed"
               secondaryColor="#f7f7f7">
               <circle cx="37" cy="321" r="18" />
               <rect x="-28" y="-224" rx="0" ry="0" width="321" height="472" />
               <rect x="144" y="188" rx="0" ry="0" width="0" height="0" />
               <rect x="150" y="207" rx="0" ry="0" width="0" height="2" />
               <rect x="105" y="21" rx="0" ry="0" width="0" height="0" />
               <rect x="-2" y="263" rx="0" ry="0" width="184" height="16" />
               <circle cx="216" cy="270" r="15" />
             </ContentLoader>
           ))
         }
        </StackGrid>
      </StackGridContainer>
    :
    children
  );
};

const CustomLoading = connectStateResults(Loading);

export default CustomLoading
