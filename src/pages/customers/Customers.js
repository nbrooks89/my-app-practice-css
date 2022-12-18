
import './Customers.css';
import customerImg1 from "../../assets/customer-1.jpg"
import customerImg2 from "../../assets/customer-2.jpg"


const Customers = ()=> {
    return (
        <section id="customers">
            
            <div className="testimonial" id="customer-1">
                <div className="testimonial__image-container">
                    <img src={customerImg1} alt="Mike Statham - Customer" className="testimonial__image"/>
                </div>
                <div className="testimonial__info">
                    <h1 className="testimonial__name">Mike Statham</h1>
                    <h2 className="testimonial__subtitle">Founder of
                        <a href="tech-analysis.com">tech-analysis.com</a>
                    </h2>
                    <p className="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
                </div>
            </div>
            <div className="testimonial" id="customer-2">

                <div className="testimonial__info">
                    <h1 className="testimonial__name">John Mellow</h1>
                    <h2 className="testimonial__subtitle">Hosts his private videos on uHost.
                    </h2>
                    <p className="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                        it in uHost!
                    </p>
                </div>
                <div className="testimonial__image-container">
                    <img  src={customerImg2} alt="John Mellow - Customer" className="testimonial__image"/>
                </div>
            </div>
     
        </section>
    );
}

export default Customers;
