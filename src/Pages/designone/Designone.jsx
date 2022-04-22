import React from 'react'
import Designtwo from '../designtwo/Designtwo'


const Designone = () => {
  return (
    
  <>
      <section id="about" className="about mb-5">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <Designtwo />
  </>


  )
}

export default Designone