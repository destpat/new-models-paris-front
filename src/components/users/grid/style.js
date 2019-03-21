import styled from 'styled-components'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'

export const getGutterWidth = (width, type) => {
  if (type === 'search') {
    return width <= 480 ? 10 : 15
  } else {
    return width <= 480 ? 10 : 40
  }
}

export const getWidth = (width) => {
  if (width <= 480) {
    return 170
  } else if (width <= 800) {
    return 220
  } else if (width <= 1024){
    return 200
  } else {
    return 240
  }
}

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

export const StackGridContainer = styled.div`
  margin-top: 30px;
  @media(max-width: 480px) {
    margin-top: 15px;
  }
`
export const HoverText = styled.div`
  font-size: 1.3em;
  font-weight: 200;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  cursor: pointer;
`

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 15px;
`

export const UserName = styled.div`
  font-size: 1.3em;
  text-transform: uppercase;
  font-weight: 300;
`

export const Photo = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fafafa;
  background-image: url(${props => props.imageUrl});
  cursor: pointer;
  background-size: cover;
  @media(max-width: 480px) {
    height: 233px;
  }
  &::before {
    position: absolute;
    content:" ";
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(255,255,255,0.68);
    opacity: 0;
    @media(max-width: 480px) {
      display: none;
    }
  }
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
`

export const PhotoContainer = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;
  color: #000;
  &:hover ${HoverText} {
    opacity: 1;
    -webkit-transition: opacity .5s ease-in-out;
    -moz-transition: opacity .5s ease-in-out;
    -ms-transition: opacity .5s ease-in-out;
    -o-transition: opacity .5s ease-in-out;
    transition: opacity .5s ease-in-out;
    @media(max-width: 480px) {
      opacity: 0;
    }
  }
  &:hover ${Photo} {
    &::before {
      opacity: 1;
      -webkit-transition: opacity .5s ease-in-out;
      -moz-transition: opacity .5s ease-in-out;
      -ms-transition: opacity .5s ease-in-out;
      -o-transition: opacity .5s ease-in-out;
      transition: opacity .5s ease-in-out;
    }
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    @media(max-width: 480px) {
      transform: none;
    }
`
