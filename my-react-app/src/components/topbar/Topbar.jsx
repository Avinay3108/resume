import "./topbar.scss"
import React from "react"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>6230071420</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>vinaypathania258@gmail.com</span>
          </div>

        </div>

        <div className="right">

          <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Topbar
