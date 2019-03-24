import styled from 'styled-components'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'

export const FavoriteBorderCustom = styled(FavoriteBorder)`
  &:hover {
    color: #ac99ff;
    cursor: pointer;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color;
    transition-property: color;
  }
`
export const FavoriteCustom = styled(Favorite)`
  color: #ac99ff;
  cursor: pointer;
`
