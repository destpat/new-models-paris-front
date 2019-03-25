import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled, { keyframes } from 'styled-components'

export const Title = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 100;
  margin-top: 20vh;
`

export const EnquireTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
`

export const TitleHelper = styled.p`
  font-weight: 200;
  text-align: center
`

export const ButtonOpenBookingForm = styled(Button)`
  position: fixed;
  border-radius: 0px;
  min-height: 46px;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 1301;
`
const Beat = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const FavoriteBeat = styled(FavoriteIcon)`
  animation: ${Beat} 1.2s infinite;
  width: 40px;
  height: 40px;
  color: #ac99ff
`

export const FavoriteContainer = styled.div`
  text-align: center;
`
export const FavoriteUsersContainer = styled(Grid)`
  height: calc(100vh - 160px);
  @media(max-width: 959px) {
    height: 100%;
    margin-bottom: 40px;
  }
  overflow: scroll;
`

export const Section = styled.section`
  position: relative;
  width: 100%;
  left: 3%;
  @media (max-width: 480px) {
    left: 6%;
  }
`

export const TitleFavorite = styled.h1`
  font-size: 2.3em;
  margin-bottom: ${props => props.enquireMode ? '10px': '0px'};
  margin-top: 10px;
  font-weight: 200;
`

export const EnquireButton = styled(Button)`
  position: absolute;
  right: 150px;
  top: 20px;
  font-size: 0.9em;
`

export const MobileEnquireFormContainer = styled(Grid)`
  display: none
  @media(max-width: 959px) {
    display: block;
  }
`
