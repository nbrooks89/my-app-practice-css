

import './SideNavBar.css';


const SideNavBar = ({ setIsSideNavOpen, isSideNavOpen }) => {

    return (
        <div>
            {isSideNavOpen &&
                <div>
                    <div className="backdrop" onClick={() => setIsSideNavOpen(false)}></div>
                    <nav class="mobile-nav">
                        <ul class="mobile-nav__items">
                            <li class="mobile-nav__item">
                                <a href="packages/index.html">Packages</a>
                            </li>
                            <li class="mobile-nav__item">
                                <a href="customers/index.html">Customers</a>
                            </li>
                            <li class="mobile-nav__item mobile-nav__item--cta">
                                <a href="start-hosting/index.html">Start Hosting</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </div>
    );
}

export default SideNavBar;
