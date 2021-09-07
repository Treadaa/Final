import React from 'react'
import { useState,useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { Nav,
    NavLogo,
    NavbarContainer,
    NavItem,
    MobileIcon,
    NavMenu,
    NavLinks,
   // NavBtn,
   // NavBtnLink
} from './NavbarElement';
import {FaBars } from 'react-icons/fa'



const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false)
    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else
        setScrollNav(false); 
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
        
    }, [])
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
       <>
       <Nav scrollNav={scrollNav}>
           <NavbarContainer>
               <NavLogo to="/" onClick={toggleHome}>
                Treadaa
               </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="about"
                       smooth={true} duration={500} spy={true} exact='true' offset={80}
                       >
                         About
                       </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="discover"
                        smooth={true} duration={500} spy={true} exact='true' offset={100}>
                         Discover
                       </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="services"
                        smooth={true} duration={500} spy={true} exact='true' offset={100}>
                         Services
                       </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="sign-up"
                        smooth={true} duration={500} spy={true} exact='true' offset={100}>
                         Sign-up
                       </NavLinks>
                   </NavItem>
               </NavMenu>
              {/* <NavBtn>
                   <NavBtnLink to='/signIn'>
                    SignIn
                   </NavBtnLink>
               </NavBtn> */}
           </NavbarContainer>
       </Nav>
       </>
    )
}
export default Navbar;
