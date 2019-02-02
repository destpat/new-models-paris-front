import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'
import { getPublicUsers } from '../users/usersAction'

/*
*  @description Component
*  Affichage en grille des profils utilisateurs
*/
class Women extends Component {
  componentDidMount() {
    this.props.getPublicUsers('women')
  }
  render() {
    return (
      <UsersGrid/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPublicUsers: (sex) =>
      dispatch(getPublicUsers(sex))
  }
}

export default connect(null, mapDispatchToProps)(Women);
