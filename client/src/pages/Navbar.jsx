import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHome,FaHeart } from 'react-icons/fa';
import {FcHome,FcLike,FcBusinessman} from 'react-icons/fc'
import{BiLogOut} from 'react-icons/bi'
import{BsLayoutSidebarInset} from 'react-icons/bs'
import{GiEgyptianProfile} from 'react-icons/gi'
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const navigate=useNavigate()
  const logout=()=>{
    navigate('/login')
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar bg-success'>
          <Link to='#' className='menu-bars bg-success d-flex flex-row flex-row-reverse'>
            <BsLayoutSidebarInset onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items bg-success list-unstyled' onClick={showSidebar}>
            <li className='navbar-toggle bg-success'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='list-unstyled'>
              <div  className='d-flex flex-column h-100 justify-content-between'>
              <div  className='d-flex flex-column lg-8 mb-5 '>
              <Link id="menub"className='text-decoration-none p-2 font-italic bg-success text-white m-2 shadow-sm border-success rounded-2'  to="/home" ><FcHome/> Home</Link>
              <Link id="menub" className='text-decoration-none p-2 font-italic bg-success text-white m-2 shadow-sm border-success rounded-2' to="/recommendation" ><FcBusinessman/>Recomendation</Link>
              <Link id="menub" className='text-decoration-none p-2 font-italic bg-success text-white m-2 shadow-sm border-success rounded-2' to="/favourites"  ><FcLike/>Favourites</Link>
              <Link id="menub" className='text-decoration-none p-2 font-italic bg-success text-white m-2 shadow-sm border-success rounded-2' to="/profile"  ><GiEgyptianProfile/>Profile</Link>
              </div>

              <div className='lg-4 mt-5 d-flex ml-2'>
                <button className='shadow rounded-2  m-2 p-2'  style={{backgroundColor:"rgb(242,161,83)",borderColor:"rgb(242,161,83)"}} onClick={logout}><BiLogOut/>Logout</button>
         
              </div>
              </div>
            </li>


          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;