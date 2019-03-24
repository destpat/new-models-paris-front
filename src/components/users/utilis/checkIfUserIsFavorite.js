const checkIfUserIsFavorite = (id, favoriteUsers) => {
  return favoriteUsers[favoriteUsers.findIndex(user => user.id === id)]
}

export default checkIfUserIsFavorite
