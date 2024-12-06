import Table from '../Table/Table';
import Navbar from '../Navbar/Navbar';
import Pagination from '../Pagination/Pagination';
import data from '../Table/mock-data.json'
import './homePage.scss';
import { useState } from 'react';

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  
  function handlePageChange(event) {
    setCurrentPage(event.detail.currentPage)
    setPostsPerPage(event.detail.itemsPerPage)
  }

  return (
    <div className='container'>
      <div className="navbar__wrapper">
        <Navbar />
      </div>
      <div className="main__table-template-wrapper">
        <div className="table__wrapper">
          <div className="table__desc">
            <h2>Table name</h2>
          </div>
          <Table currentPage={currentPage} postsPerPage={postsPerPage} />
        </div>
        <div className="pagination__wrapper">
          <Pagination total={data[0].rows.length} currentPage={1} onIfxPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
