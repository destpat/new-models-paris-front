import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'
import { getPublicUsers } from '../users/usersAction'
import Loader from '../utilis/loader/Loader'

/*
*  @description Component
*  Affichage en grille des profils utilisateurs
*/
class Women extends Component {
  componentDidMount() {
    this.props.getPublicUsers('women')
  }
  render() {
    const { fetchingPublicUsers, publicUsers } = this.props
    return (
      <div>
        {
          fetchingPublicUsers ?
          <Loader />
          :
          <UsersGrid users={publicUsers}/>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPublicUsers: (sex) =>
      dispatch(getPublicUsers(sex))
  }
}

const mapStateToProps = state => ({
  fetchingPublicUsers: state.users.fetchingPublicUsers,
  publicUsers: state.users.publicUsers
})

export default connect(mapStateToProps, mapDispatchToProps)(Women);
