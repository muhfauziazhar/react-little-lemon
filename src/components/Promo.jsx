import * as React from 'react';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <section className="promo">
      <article>
        <h1 className="section-heading">April Promo</h1>
        <div className="banner w-4/5 mx-auto flex flex-col lg:flex-row py-5 justify-center md:justify-evenly items-center">
          <div className='mb-6 lg:mb-0 flex flex-col items-center'>
            <h1 className='text-2xl'>Family Weekend Package</h1>
            <p className='text-4xl'>Off up to 50%</p>
          </div>
          <div>
            <Link className="btn-secondary p-3 lg:p-5" to="/reserve"><button>Reserve a Table</button></Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Promo;
