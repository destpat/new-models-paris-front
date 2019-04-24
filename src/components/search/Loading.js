import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom';

const Loading = ({ searching, children }) => {
  return (
    searching ?
    <div>
    </div>
    :
    children
  );
};

const CustomLoading = connectStateResults(Loading);

export default CustomLoading
