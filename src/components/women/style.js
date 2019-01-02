import styled from 'styled-components'

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
  text-align: center;
`

export const UserName = styled.h2`
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
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
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
