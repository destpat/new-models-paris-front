import React from 'react'
import ReactPagination from 'rc-pagination';
import { connectPagination } from 'react-instantsearch-dom';
import './pagination.css';

let locale =  {
  // Options.jsx
  items_per_page: '',
  jump_to: '',
  jump_to_confirm: '',
  page: '',

  // Pagination.jsx
  prev_page: '',
  next_page: '',
  prev_5: '',
  next_5: '',
  prev_3: '',
  next_3: ''
}

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => (
  <ReactPagination
    className="ant-pagination"
    defaultCurrent={currentRefinement}
    total={nbPages}
    defaultPageSize={1}
    locale={locale}
    onChange={(page) => {
      refine(page)
      document.getElementById('hits-container').scrollTop = 0
    }}/>
);

const CustomPagination = connectPagination(Pagination)

export default CustomPagination
