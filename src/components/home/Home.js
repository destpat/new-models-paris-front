import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import backgroundImage from '../../images/home-background.jpg'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from '@material-ui/core/Grid'

const CustomFavoriteIcon = styled(FavoriteIcon)`
  position: relative;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  color: #ac99ff;
`

const ImageOverContent = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  width: 60%;
  @media(max-width: 959px) {
    width: 95%;
  }
  transform: translate(-50%, -50%);
`

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  height: 72vh;
  background-color: #000;
`

const Title = styled.h1`
font-family: 'Nunito', sans-serif;
font-weight: 300;
@media(max-width: 480px) {
  font-size: 38px;
}
@media(min-width: 480px) {
  font-size: calc(3.8vw + 20.67px);
}
@media(min-width: 1200px) {
  font-size: 64px;
}
`

const CustomH2 = styled.h2`
  color: #484848;
  font-weight: 400;
  margin: 0;
  padding: 40px 0px 60px 80px;
  font-size: 1.8em;
  @media(max-width: 960px) {
    padding: 30px 0px 40px 0px;
    text-align: center;
  }
  @media(min-width: 1200px) {
    font-size: 2.2em;
  }
`

const Footer = styled(Grid)`
  font-weight: 300;
  color: #191919;
  font-size: 0.9em;
  padding-bottom: 20px;
`

const Number = styled.div`
  background-color: #aea8fa;
  color: #fff;
  width: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center
  font-size: 18px;
  margin-bottom: 38px;
  @media(min-width: 480px) {
    text-align: center;
  }
`

const StepContainer = styled.div`
  padding-bottom: 30px;
  margin-bottom: 50px;
`

const CustomActionButton = styled(Button)`
  text-transform: none;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  font-weight: 400;
  background: linear-gradient(45deg, #AEA8FA 30%, #AEA8FA 90%);
  padding: 0 50px;
`

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 30px;
  font-size: 1.2em;
  cursor: pointer;
`

const Email = styled(Grid)`
  padding: 8px;
  text-align: center;
  @media(max-width: 960px) {
    text-align: left;
  }
  & > a {
    color: #191919;
    text-decoration: none;
  }
`

const SocialIcon = styled(Grid)`
  padding: 8px;
  text-align: right;
  @media(max-width: 600px) {
    text-align: left;
  }
  & > a {
    color: #000;
    &:hover {
    color: #aea8fa;
    transition: 0.3s;
   }
  }
`

const CustomStrong = styled.strong`
  line-height: 25px;
`

const CustomSpan = styled.span`
  line-height: 25px;
`

/*
*  @description Component
*  page d'acceuil du site
*/
class Home extends Component {
  render() {
    const { history : { push } } = this.props;
    return (
      <div>
        <ImageContainer>
          <img src={backgroundImage} alt="test" style={{height: '72vh'}}/>
          <ImageOverContent>
            <Title>Les meilleurs modèles pour vos projets</Title>
            <CustomActionButton color="primary" variant="contained" onClick={()=> push('/search')}> Rechercher un modèle </CustomActionButton>
          </ImageOverContent>
        </ImageContainer>
        <div>
        <StepContainer>
          <CustomH2>
            Comment ça marche ?
          </CustomH2>
          <Grid container direction="row" justify="center" alignItems="stretch" spacing={40}>
            <Grid item md={3} xs={8}>
              <section>
                  <Number>1</Number>
                  <CustomStrong> J’ajoute plusieurs modèles </CustomStrong>
                  <CustomSpan> qui correspondent aux besoins de mon projet dans mes favoris. <CustomFavoriteIcon /></CustomSpan>
              </section>
            </Grid>
            <Grid item md={3} xs={8}>
              <section>
                <Number>2</Number>
                <CustomStrong> Je fait ma demande </CustomStrong>
                <CustomSpan> en donnant les détails de mon projet. </CustomSpan>
              </section>
            </Grid>
            <Grid item md={3} xs={8}>
              <section>
                <Number>3</Number>
                <CustomStrong> En moins de 24h </CustomStrong>
                <CustomSpan>l’équipe New Models Paris me contacte, avec la liste des modèles disponible pour mon projet.</CustomSpan>
              </section>
            </Grid>
          </Grid>
        </StepContainer>
        <Grid container direction="row" justify="center" alignItems="center" spacing={32} style={{marginBottom: 60}}>
          <CustomActionButton color="primary" variant="contained" onClick={()=> push('/candidatures')}>
              Devenenir modèle
           </CustomActionButton>
          <CustomActionButton color="primary" variant="outlined" style={{background: 'none'}} onClick={()=> push('/search')}> Rechercher un modèle </CustomActionButton>
        </Grid>
        <Footer
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item md={4} sm={4} xs={12} style={{padding: 8}}>
            <div>New Models Paris - 2019 - </div>
          </Grid>
          <Email item md={4} sm={4} xs={12}>
            <a href="mailto:contact@newmodelsparis.com">
              E: contact@newmodelsparis.com
            </a>
          </Email>
          <SocialIcon item md={4} sm={4} xs={12}>
            <a href="https://www.instagram.com/newmodels.paris/">
              <CustomFontAwesomeIcon icon={['fab', 'instagram']}/>
            </a>
            <a href="https://www.facebook.com/Newmodels.Paris/">
              <CustomFontAwesomeIcon icon={['fab', 'facebook-f']}/>
            </a>
          </SocialIcon>
        </Footer>
      </div>
    </div>
    )
  }
}

export default withRouter(Home);
