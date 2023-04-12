import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Promo from './components/Promo';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main class="main-wrapper container">
        <Promo />
        <section id="menu" class="list-menu-wrapper">
          <h1 class="section-heading">Most Favorite Menu</h1>
          <div class="list-menu">
            <article>
              <img src="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg" alt="Fettuccine Alfredo" />
              <h1>Fettuccine Alfredo</h1>
              <p>An Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese.</p>
            </article>
            <article>
              <img src="https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg" alt="Mediterranean Pasta Salad" />
              <h1>Mediterranean Pasta Salad</h1>
              <p>An everyday salad made typically of three key ingredients: tomatoes, cucumbers, and parsley and seasoned simply with kosher salt.</p>
            </article>
            <article>
              <img src="https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg" alt="Treacle Tart" />
              <h1>Treacle Tart</h1>
              <p>A buttery, flaky pastry crust is filled with a sweet and gooey lemon-infused filling.</p>
            </article>
          </div>
        </section>
        <section id="about" class="about-wrapper">
          <h1 class="section-heading">About Us</h1>
          <article>
            <img src="./assets/images/Asset 20@4x.png" alt="About Little Lemon Logo" />
            <p>
              Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has
              a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day. <br />
              <br />
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a
              restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the
              restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
          </article>
        </section>
        <section id="contact" class="contact-wrapper">
          <article>
            <h1 class="section-heading">Contact Us</h1>
            <div class="socmed-btn-wrapper">
              <a class="btn-secondary" href="https://instagram.com/">
                <i class="bx bxl-instagram-alt"></i> little.lemon
              </a>
              <a class="btn-secondary" href="https://twitter.com/">
                <i class="bx bxl-twitter"></i> little.lemon
              </a>
            </div>
          </article>
        </section>
      </main>
      <footer class="container">
        <img src="./assets/images/Asset 9@4x.png" alt="Little Lemon Logo Footer" class="footer-logo" />
        <p>© 2023 LITTLE LEMON. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
