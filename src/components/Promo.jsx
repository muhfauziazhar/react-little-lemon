import * as React from 'react';

const Promo = () => {
  return (
    <section className="promo">
      <article>
        <h1 className="section-heading">April Promo</h1>
        <div className="banner">
          <div className="content">
            <h1>Family Weekend Package</h1>
            <p>Off up to 50%</p>
          </div>
          <div>
            <a className="btn-secondary" href="#">
              Reserve a Table
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Promo;
