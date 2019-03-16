import React, { Component } from 'react'
import  { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { getPublicUser } from '../usersAction'
import { hairsColorsBinding, extraTypeBinding, clothesBinding, eyesColorsBinding } from '../../utilis/bindingValue'
import { Photo,
         PhotoContainer,
         InformationContainer,
         UserName,
         UserInformationContainer,
         UserInfomationTitle,
         UserInformationValue,
         ExtraType,
         ExtraTypeContainer
       } from './style'
import Loader from '../../utilis/loader/Loader'

class Profile extends Component {
  componentDidMount() {
    const { getPublicUser, match } = this.props
    getPublicUser(match.params.id)
  }
  render() {
    const { fetchingPublicUser } = this.props;
    const { firstname, height, hairColor, eyesColor, extraType, photos, clothes } = this.props.currentPublicUser
    return (

      <div>
        {
          fetchingPublicUser ?
          <Loader />
          :
          <Grid container>
            <Grid item md={6} xs={12}>
              <Grid container direction="row" justify="center" alignItems="center">
                <InformationContainer>
                  <UserName>{ firstname }</UserName>
                  <UserInformationContainer>
                    <UserInfomationTitle>Taille : </UserInfomationTitle>
                    <UserInformationValue style={{marginRight: 20}}>{ height } cm</UserInformationValue>
                    <UserInfomationTitle>Cheveux : </UserInfomationTitle>
                    <UserInformationValue style={{marginRight: 20}}>
                      { hairsColorsBinding.find(o => o.value === hairColor).name  }
                    </UserInformationValue>
                    <UserInfomationTitle>Yeux : </UserInfomationTitle>
                    <UserInformationValue>
                      { eyesColorsBinding.find(o => o.value === eyesColor).name }
                    </UserInformationValue>
                  </UserInformationContainer>
                  <div style={{marginBottom: 20}}>
                    <UserInfomationTitle>  Type de figuration : </UserInfomationTitle>
                  </div>
                  <ExtraTypeContainer>
                    {
                      extraType.map((type, index) => <ExtraType key={index}> { extraTypeBinding.find(o => o.value === type).name } </ExtraType>)
                    }
                  </ExtraTypeContainer>
                  <div style={{marginBottom: 20}}>
                    <UserInfomationTitle>  Type de tenue : </UserInfomationTitle>
                  </div>
                  <ExtraTypeContainer>
                    {
                      clothes.map((type, index) => <ExtraType key={index}> { clothesBinding.find(o => o.value === type).name } </ExtraType>)
                    }
                  </ExtraTypeContainer>
                </InformationContainer>
              </Grid>
            </Grid>
            <PhotoContainer item md={6} xs={12}>
              {
                photos.map((photo, index) => <Photo key={index} alt="models" src={photo.url}/>)
              }
            </PhotoContainer>
          </Grid>
        }
      </div>
    )
  }
}

const mapDispatchToPros = dispatch => ({
  getPublicUser: (id) =>
    dispatch(getPublicUser(id))
})

const mapStateToProps = state => ({
  currentPublicUser: state.users.currentPublicUser,
  fetchingPublicUser: state.users.fetchingPublicUser
})

export default connect(mapStateToProps, mapDispatchToPros)(Profile);
