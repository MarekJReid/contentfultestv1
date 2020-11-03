import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  nav2trans,
  clickMobileNavMenu,
  clickMobNavClose,
} from "../../../animation/animations"

function HeroNav() {
    const [isOpen, setIsOpen] = useState(false)
    
    let navBox = useRef(null)

    let mobNavMenu = useRef(null)
    let mobNavMenuLinks = useRef(null)
    let mobNavMenuClose = useRef(null)

    useEffect(() => {
        
        nav2trans(navBox)
      })

  const cclickMobileNavMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setIsOpen(!isOpen)
      clickMobileNavMenu(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
    }
  }

  const cclickMobNavClose = () => {
    setIsOpen(!isOpen)
    clickMobNavClose(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
  }
    return (

        <nav>
     {/* Mobile Nav */}
     <div className="mobile-nav-box">
     <h1 >
       <Link to="/"
       style={{ color: `yellow`, fontFamily: `GothamPro`, fontSize: `130%` }}
       > The Hope Barometer </Link>
     </h1>
     <div className="" onClick={cclickMobileNavMenu}>
       <div class="">
         <div
           style={{
             color: `yellow`,
             fontSize: `300%`,
             marginTop: `-.42rem`
           }}
         >
           {" "}
           ={" "}
         </div>
       </div>
       <div className="mobile-menu" ref={el => (mobNavMenu = el)}>
         <div className="nav-title">
           <h5
             style={{
               color: `yellow`,
               fontSize: `300%`,
               marginTop: `.2rem`,
               marginBottom: `-.5rem`,
               paddingLeft: `.5rem`,
               paddingTop: `.5rem`,
             }}
           >
             <Link to="/"> The Hope </Link>
           </h5>
           <h5
             style={{
               color: `yellow`,
               fontSize: `300%`,
               margin: `0`,
               paddingLeft: `7rem`,
             }}
           >
             Barometer
           </h5>
         </div>

         <div
           className="close-icon"
           onKeyDown={cclickMobNavClose}
           onClick={cclickMobNavClose}
           ref={el => (mobNavMenuClose = el)}
         >
           x
         </div>
         <div className="links-box">
           <ul ref={el => (mobNavMenuLinks = el)}>
             <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
               <Link to="/about">
                 <p style={{ color: `yellow` }}>About</p>
               </Link>
             </li>

             <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
               <Link to="/survey">
                 <p style={{ color: `yellow` }}>Survey</p>
               </Link>
             </li>
             <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
               <Link to="/reports">
                 <p style={{ color: `yellow` }}>Reports</p>
               </Link>
             </li>
             <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
               <Link to="/news">
                 <p style={{ color: `yellow` }}>News</p>
               </Link>
             </li>
             <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
               <Link to="/partners">
                 <p style={{ color: `yellow` }}>Partners</p>
               </Link>
             </li>
             <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
               <Link to="/contact">
                 <p style={{ color: `yellow` }}>Contact</p>
               </Link>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>

   <div className="nav-box" ref={el => (navBox = el)}>
     <Link to="/">
       <div className="nav-title">
         <span className="">The H</span>
         <span className="nav-title-o">o</span>

         <span>pe Barometer</span>
       </div>
     </Link>
     <div className="nav-links">
       <ul>
         <li></li>
         <li>
           <Link to="/about">
             <p>About</p>
           </Link>
         </li>
         <li>
           <Link to="/survey">
             <p>Survey</p>
           </Link>
         </li>
         <li>
           <Link to="/reports">
             <p>Reports</p>
           </Link>
         </li>
         <li>
           <Link to="/news">
             <p>News</p>
           </Link>
         </li>
         <li>
           <Link to="/partners">
             <p>Our Partners</p>
           </Link>
         </li>
         <li>
           <Link to="/contact">
             <p>Contact</p>
           </Link>
         </li>
       </ul>
     </div>
   </div>
   </nav>
    )
}

export default HeroNav