import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'
import { getPublicUsers } from '../users/usersAction'
import Loader from '../utilis/loader/Loader'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.6em;
  margin-left: 35px;
  font-weight: 200;
  text-transform: uppercase;
  font-style: italic;
  font-family: 'Playfair Display', serif;
`

/*
*  @description Component
*  Affichage en grille des profils utilisateurs
*/
class Men extends Component {
  componentDidMount() {
    this.props.getPublicUsers('men')
  }
  render() {
    const { fetchingPublicUsers, publicUsers } = this.props;
    return (
      <div>
        <Title>
          Hommes
        </Title>
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

export default connect(mapStateToProps, mapDispatchToProps)(Men)
