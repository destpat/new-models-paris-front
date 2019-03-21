import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'

/*
*  @description Component
*  Affiche les utilisateurs qui sont choisie comme favorie
*/
class Favorite extends Component {
  render() {
    const { favoriteUsers } = this.props
    return (
      <div>
        {
          favoriteUsers.length < 1 ?
          <div>
            Aucun utilisateurs en favorie
          </div>
          :
          <UsersGrid users={favoriteUsers}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favoriteUsers: state.favorites.favoriteUsers
})

export default connect(mapStateToProps)(Favorite);
