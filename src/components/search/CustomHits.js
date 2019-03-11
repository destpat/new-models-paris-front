import React from 'react'
import { connectHits } from 'react-instantsearch-dom';
import StackGrid from "react-stack-grid"
import sizeMe from 'react-sizeme'
import { HoverText, UserNameContainer, UserName, Photo, PhotoContainer } from '../users/grid/style'

const Hits = ({ hits, size: { width }}) => (
  <StackGrid gutterWidth={width <= 480 ? 10 : 25}
             gutterHeight={5}
             columnWidth={width <= 480 ? 174 : 240}>
    {
      hits.map((hit, index) => {
        let { id, firstname } = hit
        return (
          <div key={index}>
            <PhotoContainer onClick={() => this.props.history.push(`${this.props.match.url}/${id}`)}>
              <Photo imageUrl={'https://new-models-paris-upload-photos.s3.eu-central-1.amazonaws.com/protected/eu-central-1%3Adfc5a3d3-93dd-4626-81ae-676645a4db36/1551783689052.jpg'} alt="models" />
              <HoverText>
                {firstname}
                <br/>
                <br/>
                Voir le portfolio
              </HoverText>
            </PhotoContainer>
            <UserNameContainer>
              <UserName>
                {firstname}
              </UserName>
            </UserNameContainer>
          </div>
        )
      })
    }
  </StackGrid>
);

const CustomHits = connectHits(Hits);

export default sizeMe()(CustomHits)
