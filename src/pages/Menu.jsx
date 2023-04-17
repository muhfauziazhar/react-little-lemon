import * as React from 'react';
import { useLocation } from 'react-router';

const listMenu = [
  {
    strMealThumb: 'https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg',
    strMeal: 'Fettuccine Alfredo'
  },
  {
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
    strMeal: 'Mediterranean Pasta Salad',
  },
  {
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg',
    strMeal: 'Treacle Tart',
  },
];

const Menu = () => {
  const location = useLocation()
  const [italianFoods, setItalianFoods] = React.useState([]);
  const getItalianFoods = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian');
    const data = await response.json();
    return data;
  }

  React.useEffect(() => {
    location.pathname === '/menu' ? getItalianFoods().then((data) => {
      setItalianFoods(data.meals);
    }) : setItalianFoods(listMenu);
    
  }, [location.pathname])
  
  return (
    <section id="menu" className="list-menu-wrapper">
      <h1 className="section-heading">{location.pathname === '/menu' ? 'Our Menu' : 'Most Favorite Menu'}</h1>
      <div className="list-menu">
        {italianFoods.length > 0 && italianFoods.map((menu) => {
          return (
            <article key={menu.idMeal}>
              <img src={menu.strMealThumb} alt={menu.strMeal} />
              <h1>{menu.strMeal}</h1>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
