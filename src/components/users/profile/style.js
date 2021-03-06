import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

export const Photo = styled.img`
  width: auto;
  max-height: 90vh;
  max-width: 100%;
  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      max-height: 100%;
  }
`

export const PhotoContainer = styled(Grid)`
  padding: 5px 30px 10px 0px;
  text-align: center;
  @media (max-width: 959px) {
    padding: 0 15px;
  }
  ${Photo}:not(:first-child) {
    margin-top: 40px;
  }
  @media (min-width: 480px) {
    ${Photo}:first-child {
      margin-top: 30px;
    }
  }
  ${Photo}:last-child {
    margin-bottom: 80px;
  }
`
export const InformationContainer = styled.div`
  position: fixed;
  left: 25%;
  top: 23%;
  transform: translateX(-50%);
  text-align: center;
  width: 50%;
   @media (max-width: 959px) {
     padding: 0 15px;
     position: sticky;
     left: 0;
     top: 0;
     transform: none;
     text-align: center;
     width: 100%;
   }
`

export const UserName = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 200;
`

export const UserInformationContainer = styled.div`
  margin-bottom: 30px;
`

export const UserInfomationTitle = styled.span`
  text-transform: uppercase;
  color: #808080;
  font-size: 0.9em;
  font-weight: 500;
  white-space: pre;
`

export const UserInformationValue = styled.span`
  margin-right: 20px;
  margin-left: 5px;
  font-size: 0.9em;
  text-transform: lowercase;
`

export const ExtraType = styled.li`
  font-size: 0.9em;
  display: inline-block;
  margin: 10px;
`

export const ExtraTypeContainer = styled.ul`
  text-align: center;
  padding: 0;
  overflow-wrap: normal;
`

export const AddToFavorite = styled.div`
  margin-left: 20px;
  font-size: 1.1em;
  font-weight: 300;
`

export const FavoriteContainer = styled.div`
  display: inline-flex;
  margin-bottom: 30px;
`

export const Br = styled.br`
  @media (max-width: 959px) {
    display: block;
  }
  display: none;
`

export const CustomChip = styled(Chip)`
  color: #8580cb;
  margin-bottom: 30px;
`
