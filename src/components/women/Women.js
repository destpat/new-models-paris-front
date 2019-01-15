import React, { Component } from 'react'
// import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router'
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';
import { HoverText, UserNameContainer, UserName, Photo, PhotoContainer } from './style'


let users = [
  {
    surname: "Marine",
    photo: ["http://www.studiolenoir.fr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shooting_1.jpg"]
  },
  {
    surname: "Linda",
    photo: ["https://scontent-cdg2-1.cdninstagram.com/vp/e96236ab5925cc79c265f0985ca0da17/5CC45D73/t51.2885-15/e35/47440300_266963223973528_3185864985851713717_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com"]
  },
  {
    surname: "Lincey",
    photo: ["https://scontent-cdg2-1.cdninstagram.com/vp/b1c12579ad338bf0e4a7833625ae56c2/5CD6CE69/t51.2885-15/e35/47581963_2264157707131077_3532120415838867955_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com"]
  },
  {
    surname: "Anais",
    photo: ["https://onatestepourvous.fr/wp-content/uploads/2017/07/portrait-de-vos-reves1.jpg"]
  },
  {
    surname: "clothilde",
    photo: ["https://onatestepourvous.fr/wp-content/uploads/2017/07/portrait-de-vos-reves1.jpg"]
  },
  {
    surname: "Mathilde",
    photo: ["https://onatestepourvous.fr/wp-content/uploads/2017/07/portrait-de-vos-reves1.jpg"]
  },
  {
    surname: "Mathilde",
    photo: ["https://onatestepourvous.fr/wp-content/uploads/2017/07/portrait-de-vos-reves1.jpg"]
  },
  {
    surname: "Mathilde",
    photo: ["https://onatestepourvous.fr/wp-content/uploads/2017/07/portrait-de-vos-reves1.jpg"]
  },
]

/*
*  @description Component
*  Affichage en grille des profiles utilisateur
*/

class Women extends Component {
  render() {
    const { size: { width } } = this.props;
    return (
      <StackGrid gutterWidth={width <= 480 ? 10 : 40}
                 gutterHeight={5}
                 columnWidth={width <= 480 ? 174 : 240}>
        {
          users.map((user, index) => {
            return (
            <div key={index}>
              <PhotoContainer>
                <Photo imageUrl={user.photo[0]} alt="models"/>
                <HoverText>
                  {user.surname}
                  <br/>
                  <br/>
                  Voir le portfolio
                </HoverText>
              </PhotoContainer>
              <UserNameContainer>
                <UserName>{user.surname}</UserName>
              </UserNameContainer>
            </div>
            )
          })
        }
       </StackGrid>
    )
  }
}

export default withRouter(sizeMe()(Women));
