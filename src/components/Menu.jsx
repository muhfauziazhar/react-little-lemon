import * as React from 'react';

const listMenu = [
  {
    imageUrl: 'https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg',
    title: 'Fettuccine Alfredo',
    description: 'An Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese.',
  },
  {
    imageUrl: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
    title: 'Mediterranean Pasta Salad',
    description: 'An everyday salad made typically of three key ingredients: tomatoes, cucumbers, and parsley and seasoned simply with kosher salt.',
  },
  {
    imageUrl: 'https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg',
    title: 'Treacle Tart',
    description: 'A buttery, flaky pastry crust is filled with a sweet and gooey lemon-infused filling.',
  },
];

const Menu = () => {
  return (
    <section id="menu" className="list-menu-wrapper">
      <h1 className="section-heading">Most Favorite Menu</h1>
      <div className="list-menu">
        {listMenu.map((menu) => {
          return (
            <article>
              <img src="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg" alt="Fettuccine Alfredo" />
              <h1>Fettuccine Alfredo</h1>
              <p>An Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese.</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
