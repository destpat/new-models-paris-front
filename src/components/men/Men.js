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
    this.props.getPublicUsers('men')
  }
  render() {
    const { fetchingPublicUsers } = this.props;
    return (
      <div>
        {
          fetchingPublicUsers ?
          <Loader />
          :
          <UsersGrid/>
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
  fetchingPublicUsers: state.users.fetchingPublicUsers
})

export default connect(mapStateToProps, mapDispatchToProps)(Women)
