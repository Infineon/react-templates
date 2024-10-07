import Table from '../Table/Table';
import Sidebar from '../Sidebar/Sidebar';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import './homePage.scss';

function HomePage() {

  return (
    <div className='container'>
      <div className="sidebar__wrapper">
          <Sidebar /> 
      </div>
      <div className="right__side-wrapper">
        <div className="top__wrapper">
            <div className="navbar__wrapper">
              <Navbar />
            </div>
          <div className="card__wrapper">
            <Card direction='horizontal' />
            <h2>Important headline related to the Card</h2>
          </div>
        </div>
        <div className="main__content-wrapper">
          <div className="header__wrapper">
            <h3 className="title__wrapper">Important Data</h3>
            <div className="buttons__wrapper">
              <Button variant='primary' />
              <Button variant='secondary' />
            </div>
          </div>
          <div className="table__wrapper">
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
