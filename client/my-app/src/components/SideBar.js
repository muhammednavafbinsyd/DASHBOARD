import React from 'react'
import logo from '../assets/Briefcase.png'
import logotxt from '../assets/StatBoard.png'
import s1 from '../assets/Circled Menu.png'
import s2 from '../assets/Support.png'
import s3 from '../assets/Puzzle.png'
import s4 from '../assets/Help.png'
import lg from '../assets/Shutdown.png'

function SideBar() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "#sidebar ul.list-unstyled.components li:hover .btn {\n    background-color: white; /* Change the background color of the buttons to white on hover */\n    color: #323342; /* Change the text color of the buttons back to the original color on hover */\n  }\n" }} />
      <nav id="sidebar" style={{ backgroundColor: '#323342' }} >
        <div className="text-center" style={{ backgroundColor: '#323342' }} >
          <h1><img src={logo} className="img-fluid" /></h1>
          <h1><img src={logotxt} className="img-fluid" /></h1>
        </div>
        <ul className="list-unstyled components">
          <li className='active' >
            <a href="#" className="btn btn" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={s1} style={{ marginRight: '20px' }} />
              <span> Dashboard</span>
            </a>
          </li>
          <li >
            <a href="#" className="btn btn" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={s2} style={{ marginRight: '20px' }} />
              <span> Support</span>
            </a>
          </li>
          <li >
            <a href="#" className="btn btn" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={s3} style={{ marginRight: '20px' }} />
              <span> Plugin</span>
            </a>
          </li>
          <li >
            <a href="#" className="btn btn" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={s4} style={{ marginRight: '20px' }} />
              <span> Help</span>
            </a>
          </li>
        </ul>
        <div style={{ backgroundColor: 'white', padding: '10px', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Logout Section */}
          <a href='#'className='text-danger' style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className='me-2'> Logout</span>
            <img src={lg} style={{ marginRight: '10px' }} alt="Logout" />
          </a>
        </div>
      </nav>

    </>
  )
}

export default SideBar
