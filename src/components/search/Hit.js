import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HoverText, UserNameContainer, UserName, Photo, PhotoContainer } from '../users/grid/style'
import { s3 } from '../../api/api';


class Hit extends Component {
  state = {
    profilePictureUrl: ''
  }

  async componentDidMount() {
    const { hit: { photos } } = this.props;
    const url = await s3.getImage({key: photos[0].M.key.S, id: photos[0].M.id.S})
    this.setState({profilePictureUrl: url})
  }

  render() {
    const { hit: { firstname, id }, history} = this.props;
    return (
      <div>
        <PhotoContainer onClick={() => history.push(`profile/${id}`)}>
          <Photo imageUrl={this.state.profilePictureUrl} alt="models" />
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
