
import './TopNavBar.css';

import { Link } from "react-router-dom";
    import imgIcon from "../../assets/uhost-icon.png"

    
    const TopNavBar =({setIsSideNavOpen ,isSideNavOpen})=> {
        
        

        return (
    <header className="main-header">
        <button  onClick={()=>setIsSideNavOpen(!isSideNavOpen)} className="toggle-button">
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
            </button>
        <div className="main-header__brand">
        <Link  to="/">  <img src={imgIcon}/></Link>
       
        </div>
        <nav className="main-nav">
            <ul className="main-nav__items">
                <li className="main-nav__item">
                <Link  to="/packages">  Packages</Link>
                </li>
                <li className="main-nav__item">
                <Link  to="/customers">  Customers</Link>
                </li>
                <li className="main-nav__item main-nav__item--cta">
                <Link  to="/start-hosting">  Start-Hosting</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default TopNavBar;
