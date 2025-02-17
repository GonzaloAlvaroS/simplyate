import "./Navbar.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import logo1 from "../../assets/logo1.png" 
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {

    const[sticky, setSticky] = useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 15 ? setSticky(true) : setSticky(false)
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
}

    const navigate = useNavigate();
    
    const Home = () => {
      navigate('/'); 
    };
    const FAQ = () => {
     navigate('FAQ'); 
 };

return (
     <nav className={`container ${sticky}`}>   
      <img src={logo1} alt="" className='logo' onClick={Home}/>
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="home" smooth="true" offset={0} duration={500}>MENU</Link></li>
        <li><Link to="service1" smooth="true" offset={-190} duration={500}>MISION</Link></li>
        <li><Link to="service2" smooth="true" offset={-140} duration={500}>DOUBTS</Link></li>
        <li><Link to="team" smooth="true" offset={-110} duration={500}>TEAM</Link></li>
        <li><Link to="gallery" smooth="true" offset={-100} duration={500}>FACILITIES</Link></li>
        <li className="wordfaq" smooth="true" offset={-70} duration={500} onClick={FAQ}>FAQ</li> 
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar