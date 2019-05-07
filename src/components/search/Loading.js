import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom';
import ContentLoader from 'react-content-loader'
import { getGutterWidth, getWidth} from '../users/grid/style'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  @media(max-width: 480px) {
    margin-top: 15px;
  }
`

const Profile = styled.div`
  width: ${props => getWidth(props.width)}px;
  margin: 0px ${props => getGutterWidth(props.width, props.type)}px;
  height: 300px;
`

const Loading = ({searchResults, isSearchStalled, children , width }) => {
  let array;
  searchResults ? array = Array(searchResults.hits.length).fill(0) : array = Array(8).fill(0);
  return (
    isSearchStalled ?
      <Container>
         {
           array.map((element, index) => (
             <Profile width={width} type="search">
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
             </Profile>
           ))
         }
      </Container>
    :
    children
  );
};

const CustomLoading = connectStateResults(Loading);

export default CustomLoading
