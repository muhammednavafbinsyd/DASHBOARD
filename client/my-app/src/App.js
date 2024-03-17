// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Table from './components/Table';
import PieChart from './components/PieChart';
import Graph from './components/Graph';
import ProfileCard from './components/ProfileCard';
import SideBar from './components/sideBar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import rec from './assets/rect.jpg'
import Pagination from './components/Pagination';

const App = () => {
  return (
    <div>
      <div >
        <div className="body-overlay" />
        <SideBar />
        <div id="content">
          <Navbar />
          <div className="main-content">
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
              <h3 style={{ fontWeight: 400, paddingLeft: "10px", color: 'black' }} className="mt-4 mb-4">
                Good Morning !  🌞
              </h3>
              <div className="card mb-3" style={{ maxWidth: 240 }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ marginTop: "-19px" }}>John Doe</h5>
                      <p className="card-text" style={{ marginBottom: "-20px" }}>
                        john@doe.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={rec} alt="Trendy Pants and Shoes" className=" img-fluid" style={{ borderRadius: "10px", }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <Graph />
              <div className="col-md-1"></div>
              <PieChart />
              <Table />
              <ProfileCard />
            </div>
            <Pagination />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;