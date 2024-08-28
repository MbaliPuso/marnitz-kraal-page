import React from "react";

const Menu = () => {
  return (
    <>
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">
                  Main meals
                </li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>
          <div
            className="row menu-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-6 menu-item filter-starters">
              <img
                src="assets/img/menu/lobster-bisque.jpg"
                className="menu-img"
                alt="lobster nisque"
              />
              <div className="menu-content">
                <a href="/">Steak Rossini</a>
                <span>R170</span>
              </div>
              <div className="menu-ingredients">
                350g tender rump steak, smothered with creamy chicken livers
                (mild or hot). Served with a side of your choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-specialty">
              <img
                src="assets/img/menu/bread-barrel.jpg"
                className="menu-img"
                alt="bread barrel"
              />
              <div className="menu-content">
                <a href="/">Blue Cheese & Mushroom Fillet</a>
                <span>R230</span>
              </div>
              <div className="menu-ingredients">
                300g fillet with brown mushrooms, blue cheese and mozzarella,
                served with a side of your choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-starters">
              <img
                src="assets/img/menu/cake.jpg"
                className="menu-img"
                alt="cake"
              />
              <div className="menu-content">
                <a href="/">Chicken Schnitzel</a>
                <span>R140</span>
              </div>
              <div className="menu-ingredients">
                Homemade chicken Schnitzel, served with a cheese or mushroom
                sauce. Served with a side of your choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-salads">
              <img
                src="assets/img/menu/caesar.jpg"
                className="menu-img"
                alt="caeser salad"
              />
              <div className="menu-content">
                <a href="/">Spatchcock Chicken</a>
                <span>R135</span>
              </div>
              <div className="menu-ingredients">
                Flame-grilled Mozambiqan chicken, served with a side of your
                choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-specialty">
              <img
                src="assets/img/menu/tuscan-grilled.jpg"
                className="menu-img"
                alt="tuscan grilled"
              />
              <div className="menu-content">
                <a href="/">Beer Buttered Hake</a>
                <span>R100</span>
              </div>
              <div className="menu-ingredients">
                Crispy, golden, homemade beer-battered hake, served with a side
                of your choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-starters">
              <img
                src="assets/img/menu/mozzarella.jpg"
                className="menu-img"
                alt="mozzarella"
              />
              <div className="menu-content">
                <a href="/">Calamari</a>
                <span>R200</span>
              </div>
              <div className="menu-ingredients">
                400g Calamari with tartar sauce, served with a side of your
                choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-salads">
              <img
                src="assets/img/menu/greek-salad.jpg"
                className="menu-img"
                alt="greek salad"
              />
              <div className="menu-content">
                <a href="/">Tender Rump Steak</a>
                <span>R150</span>
              </div>
              <div className="menu-ingredients">
                Flame grilled prime cut 350g Rump, served with a side of your
                choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-salads">
              <img
                src="assets/img/menu/spinach-salad.jpg"
                className="menu-img"
                alt="spinach salad"
              />
              <div className="menu-content">
                <a href="/">Tender T-bone</a>
                <span>R185</span>
              </div>
              <div className="menu-ingredients">
                Flame-grilled prime cut 500g T-bone, served with a side of your
                choice
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-specialty">
              <img
                src="assets/img/menu/lobster-roll.jpg"
                className="menu-img"
                alt="lobster roll"
              />
              <div className="menu-content">
                <a href="/">Spare Ribs (500g)</a>
                <span>R130</span>
              </div>
              <div className="menu-content">
                <a href="/">Spare Ribs (1kg)</a>
                <span>R260</span>
              </div>
              <div className="menu-ingredients">
                Flame-grilled spare ribs, served with a side of your choice
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
