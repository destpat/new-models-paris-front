import React from 'react'
import { setFavoriteUser, removeFavoriteUser } from '../../favorite/favoriteAction'
import checkIfUserIsFavorite from './checkIfUserIsFavorite'
import { FavoriteBorderCustom, FavoriteCustom } from './FavoriteStyle'
import { store } from '../../..'

const Favorite = ({id, favoriteUsers, user}) => (
  <div>
    {
      checkIfUserIsFavorite(id, favoriteUsers) ?
      <FavoriteCustom onClick={() => { store.dispatch(removeFavoriteUser(id)) }}/>
      :
      <FavoriteBorderCustom onClick={() => { store.dispatch(setFavoriteUser(user)) }}/>
    }
  </div>
)

export default Favorite
