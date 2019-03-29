import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom'

const StateResults = ({ searchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0
  const nbHits = searchResults && searchResults.nbHits
  return (
    <div>
      {
        nbHits > 100 ?
        <span hidden={!hasResults}>Afficher plus de 100 modèles</span>
        :
        <span hidden={!hasResults}>Afficher {nbHits}&nbsp;
          {
            nbHits > 1 ?
            'modèles'
            :
            'modèle'
          }
        </span>
      }
      <span hidden={hasResults}>Aucun modèle</span>
    </div>
  )
}

const CustomStateResults = connectStateResults(StateResults)

export default CustomStateResults
