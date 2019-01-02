import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const Photo = styled.img`
  width: auto;
  max-height: 80vh;
  max-width: 100%;
`

const PhotoContainer = styled(Grid)`
  padding: 5px 30px 10px 0px;
  ${Photo}:not(:first-child) {
    margin-top: 40px;
  }
`
const InformationContainer = styled.div`
  position: fixed;
  left: 25%;
  top: 30%;
  transform: translateX(-50%);
  text-align: center;
`

const UserName = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 200;
  margin-right: 16px;
`

const UserInformationContainer = styled.div`
  margin-bottom: 30px;
`

const UserInfomationTitle = styled.span`
  text-transform: uppercase;
  color: #808080;
  font-size: 0.9em;
  font-weight: 500;
`

const UserInformationValue = styled.span`
  margin-right: 20px;
  margin-left: 5px;
  font-family: cursive;
  font-size: 1.1em;
`

const ExtraType = styled.li`
  font-family: cursive;
  font-size: 1.1em;
  display: inline;
  margin: 20px;
`

const ExtraTypeContainer = styled.ul`
`

class Profile extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <InformationContainer>
                  <UserName>Vanessa</UserName>
                  <UserInformationContainer>
                    <UserInfomationTitle>Taille : </UserInfomationTitle>
                    <UserInformationValue style={{marginRight: 20}}>176 cm</UserInformationValue>
                    <UserInfomationTitle>Cheveux : </UserInfomationTitle>
                    <UserInformationValue style={{marginRight: 20}}> Brun </UserInformationValue>
                    <UserInfomationTitle>Yeux : </UserInfomationTitle>
                    <UserInformationValue>Vert</UserInformationValue>
                  </UserInformationContainer>
                  <div style={{marginBottom: 20}}>
                    <UserInfomationTitle>  Type de figuration : </UserInfomationTitle>
                  </div>
                  <ExtraTypeContainer>
                    <ExtraType>Clips vidéos musicaux</ExtraType>
                    <ExtraType>Bikini</ExtraType>
                    <ExtraType>Shootings photos</ExtraType>
                    <ExtraType>Lingerie</ExtraType>
                    <ExtraType>Vixen</ExtraType>
                    <ExtraType>Nu</ExtraType>
                  </ExtraTypeContainer>
                </InformationContainer>
            </Grid>
          </Grid>
          <PhotoContainer item md={6} >
            <Photo alt="models"
                 src="http://media.benjamin-maxant.com/photos/photographe-fashion-mode-modele-nice-cannes-antibes-cote-d-azur-320.jpg"/>

            <Photo alt="models"
                 src="http://media.benjamin-maxant.com/photos/photographe-fashion-mode-modele-nice-cannes-antibes-cote-d-azur-242.jpg"/>

            <Photo alt="models"
                 src="http://media.benjamin-maxant.com/photos/photographe-fashion-mode-modele-nice-cannes-antibes-cote-d-azur-95.jpg"/>

          </PhotoContainer>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Profile);
