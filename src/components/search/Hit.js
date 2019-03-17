import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HoverText, UserNameContainer, UserName, Photo, PhotoContainer } from '../users/grid/style'

class Hit extends Component {
  render() {
    const { hit: { firstname, id, photos }, history} = this.props;
    return (
      <div>
        <PhotoContainer onClick={() => history.push(`profile/${id}`)}>
          <Photo imageUrl={photos[0].url} alt="models" />
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
  }
}

export default withRouter(Hit)
