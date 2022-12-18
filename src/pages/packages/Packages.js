
import './Packages.css';

import { Link } from "react-router-dom";
function Packages() {
    return (
        <div>
            <div className="background"> </div>
            <div className="packages-container">
                <section className="package" id="plus">
                    <Link to="/">
                        <h1 className="package__title">Our PLUS Plan</h1>
                        <h2 className="package__badge">Recomended</h2>
                        <h2 className="package__subtitle">The most popular choice of our customers.</h2>
                        <p className="package__info">Benefit from increased storage and faster support to ensure that your mission-critical data and applications
                            are always available!</p>
                    </Link>
                </section>
                <section className="package" id="free">
                    <Link to="/">
                        <h1 className="package__title">Our FREE Plan</h1>
                        <h2 className="package__subtitle">An extremely solid start into our hosting world.</h2>
                        <p className="package__info">Get started immediately at zero cost!</p>
                    </Link >
                </section>
                <div className="clearfix"></div>
                <section className="package" id="premium">
                    <Link to="/">
                        <h1 className="package__title">Our PREMIUM Plan</h1>
                        <h2 className="package__subtitle">All your enterprise needs. Instant support, guaranteed uptime. </h2>
                        <p className="package__info">The best solution for small to large enterprises. Because hosting shouldn't be in the way!</p>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Packages;
