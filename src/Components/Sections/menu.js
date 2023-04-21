import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';


export default withTranslation()(class menu extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        window.addEventListener('click', this.clickHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickHandler)
    }

    clickHandler(e) {
        document.querySelectorAll(".season-button button").forEach((button) => {
            button.onclick = (event) => {
                removeActiveClass('.season-button button', 'active');
                event.target.classList.add('active');
                let dataSlide = event.target.getAttribute('page-slide-to');
                addActiveClass('.season-category', 'disnone');
                document.querySelector(`.season-category:nth-child(${dataSlide})`).classList.remove('disnone')
            }
        })
        function removeActiveClass(querySelector, className) {
            document.querySelectorAll(querySelector).forEach((button) => {
                button.classList.remove(className);
            })
        }
        function addActiveClass(querySelector, className) {
            document.querySelectorAll(querySelector).forEach((element) => {
                element.classList.add(className);
            })
        }
    }
    render() {
        const { t } = this.props;
        return (
            <>
                <section id="menu" className="menu section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title mb-0 pb-2">
                            <h2>{t('menu-menu')}</h2>
                            <p className="long-text">{t('menu-check')}</p>
                            <p className="small-text">{t('menu-check-mobile')}</p>
                        </div>
                        <div className="menu-info pb-2 pt-0">
                            <p>
                                15% surcharge applies on public holidays <br />
                            </p>
                        </div>
                        <div className="row season" data-aos="fade-up" data-aos-delay="350">
                            <div className="season-button text-center mb-1">
                                <button className="active" page-slide-to="1" >Starter</button>
                                <button title="Served until 2pm" page-slide-to="2">Day Menu</button>
                                <button title="Served 10.30am-late" page-slide-to="3">Lunch & Dinner</button>
                                <button page-slide-to="4">Dessert</button>
                                <button title="2hr seating every sunday from 3pm" page-slide-to="5">Alcoholic Beverage</button>
                                <button page-slide-to="6">Other Beverage</button>
                            </div>

                        </div>
                        <div className="season-section">
                            <div className="season-filters">

                                <div className="side-dish season-category">

                                    <div className="row menu-side-container mt-4" data-aos="fade-up" data-aos-delay="200">
                                        <div className="col-lg-6 menu-item filter-sidedish">
                                            <img src="assets/img/04. Menu/Starter/Aioli-proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Aioli</span><span>&#36;2.8</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-sidedish">
                                            <img src="assets/img/04. Menu/Starter/Buffalo Wings_ proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Buffalo Wings</span><span>&#36;14</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-sidedish">
                                            <img src="assets/img/04. Menu/Starter/Chicken Nuggets - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Chicken Nuggets</span><span>&#36;12.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                w/ whipped cream, malt & sprinkles
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-sidedish">
                                            <img src="assets/img/04. Menu/Starter/Fries_proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Fries</span><span>&#36;9.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                w/ whipped cream, malt & sprinkles
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-sidedish">
                                            <img src="assets/img/04. Menu/Starter/Sweet Potato Fries_ proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Sweet Potato Fries</span><span>&#36;12.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                w/ whipped cream, malt & sprinkles
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Stater */}
                                {/* Day menu */}
                                <div className="day-menu season-category disnone">

                                    <div className="row menu-daymenu-container mt-4" data-aos="fade-up" data-aos-delay="200">
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Big Breakfast - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Big Breakfast</span><span>&#36;26</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Bacon, pork & fennel sausage, eggs on sourdough, hash brown, grilled tomato & house beans
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Bircher_ proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Bircher</span><span>&#36;17</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Oat & chia bircher, house poached fruit, granola, coconut yoghurt, seasonal berries
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Brew Eggs Benny -proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Brew Eggs 'Benny'</span><span>&#36;18</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Poached eggs, spinach, hollandaise on toasted sourdough w/ chives
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Classic Brekky Burger- proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Classic Brekky Burger</span><span>&#36;18.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Bacon, poached eggs, hash brown, spinach, hollandaise on span bun
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Fruit Toast_ proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Fruit Toast</span><span>&#36;9.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Fruit & Hazelnut Toast w/ date & maple butter
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Salmon Bagel _proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Smashed Avocado</span><span>&#36;18</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Sautedd mushrooms, garlic sage oil, house bagel seasoning, ricotta, poached egg on grain vienna.
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-daymenu">
                                            <img src="assets/img/04. Menu/Day Menu/Smashed Avocado -proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Salmon Bagel</span><span>&#36;15</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of day menu */}
                                {/* Lunch and dinner */}
                                <div className="lunch-dinner season-category disnone">

                                    <div className="row menu-lunchdinner-container mt-4" data-aos="fade-up" data-aos-delay="200">
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Brew Burger - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Brew Burger</span><span>&#36;19.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Slow cooked beef brisket, bacon, American cheddar, BBQ sauce, pickle w/ shoestring fries & aioli
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Fried Chicken Burger - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Fried Chicken Burger</span><span>&#36;19.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Fried Chicken, bacon, American cheddar, slaw, chipotle mayo w/ shoestring fries & ailoi
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Halloumi Bagel - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Haloumi Bagel Meal</span><span>&#36;18.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Grilled haloumi, spinach, tomato, relish, chipotle mayo w/ shoestring fries & aioli
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Mexi Salad Bowl - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Mexi Salad Bowl</span><span>&#36;18.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Avocado hummus, slaw, spinach, grilled corn, spiced crunchy chickpeas, quinoa, tomato salsa w/ span chilli lime vinaigrette
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Panzanella Salad - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Panzanella Salad</span><span>&#36;18.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Heirloom tomatoes, cos, sourdough croutons, cucumber, basil, red onion, ricotta w/ span lemon vinaigrette
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Taco Trio - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Taco Trio</span><span>&#36;22</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Trio of soft shell tacos w/ salsa, slaw, mozzarella, sour cream & jalapenos w/ your choice of mexi spiced jackfruit or chilli beef
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-lunchdinner">
                                            <img src="assets/img/04. Menu/Lunch & Dinner/Pulled Jackfruit Burger - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Pulled Jackfruit Burger</span><span>&#36;18.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Mexi spiced Jackfruit, tomato salsa, slaw, avocado hummus w/ shoesstring fries & vegan aioli
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* End of Lunch and Diner */}
                                {/* Dessert */}
                                <div className="dessert season-category disnone">
                                    <div className="row menu-dessert-container mt-4" data-aos="fade-up" data-aos-delay="200">
                                        <div className="col-lg-6 menu-item filter-dessert">
                                            <img src="assets/img/04. Menu/Dessert/Cherry Ripe Dessert - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Cherry Ripe Dessert Shot</span><span>&#36;10</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-dessert">
                                            <img src="assets/img/04. Menu/Dessert/Churros - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Churros</span><span>&#36;12.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Served w/ whipped cream & chocolate dipping sauce
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-dessert">
                                            <img src="assets/img/04. Menu/Dessert/Icecream & Berries - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Ice Cream & Fruit</span><span>&#36;12.5</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Ice cream w/ house poached fruit & berries
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-dessert">
                                            <img src="assets/img/04. Menu/Dessert/Nutella Donut -proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Nutella Donut</span><span>&#36;8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Dessert */}

                                {/* alcoholic beverage */}
                                <div className="alcoholic-beverage season-category disnone" >
                                    <div className="col-lg-12 d-flex justify-content-center">
                                        <ul id="alcohol-flters">
                                            <li data-filter="*" className="filter-active">All</li>
                                            <li data-filter=".filter-cocktail">Cocktaill</li>
                                            <li data-filter=".filter-tapbeer">Tap Beer</li>
                                            <li data-filter=".filter-wine">Wine</li>
                                        </ul>
                                    </div>
                                    <div className="row menu-alcohol-container" data-aos="fade-up" data-aos-delay="200">

                                        <div className="col-lg-6 menu-item filter-cocktail">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Cocktail/aperol spritz - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Aperol Spritz</span><span>&#36;16</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Aperol, Casa Binaca Prosecco, Soda
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-cocktail">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Cocktail/Espresso Martini - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Espresso Martini</span><span>&#36;14</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Vodka, Kaluah, Fresh Espresso, Sugar
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-cocktail">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Cocktail/margarita - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Margarita</span><span>&#36;12</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Tequila, Triple Sec, Fresh Lime Juice
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-cocktail">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Cocktail/Mimosa Cocktail - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Mimosa</span><span>&#36;13</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                Casa Bianca Prosecco topped w/ Fresh Orange Juice
                                            </div>
                                        </div>

                                        {/* Tap Beer */}
                                        <div className="col-lg-6 menu-item filter-tapbeer">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Tap Beer/Panhead XPA - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Panhead XPA (NZ)</span><span>&#36;10</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-tapbeer">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Tap Beer/Stone _ Wood Pacific Ale - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Stowford Apple Press Cider (USK)</span><span>&#36;13</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-tapbeer">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Tap Beer/stowford press apple cider - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Stone & Wood Pacific Ale (NSW)</span><span>&#36;24</span>
                                            </div>
                                        </div>

                                        {/* End of Tap Beer */}

                                        {/* End of Wine */}
                                        <div className="col-lg-6 menu-item filter-wine">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Wine/bullant merlot -proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Bullant Cab/Merlot (SA)</span><span>&#36;13</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-wine">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Wine/Casa Bianca Prosecco - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Casa Bianca Prosecco (ITALY)</span><span>&#36;40</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-wine">
                                            <img src="assets/img/04. Menu/Alcoholic Beverage/Wine/highgate chardonnay - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Highgate Chardonnay (NSW)</span><span>&#36;10</span>
                                            </div>
                                        </div>

                                        {/* End of Wine*/}
                                    </div>
                                </div>
                                {/* End of alcoholic beverage */}

                                {/* Other Beverage */}
                                <div className="other-beverage season-category disnone">
                                    <div className="col-lg-12 d-flex justify-content-center">
                                        <ul id="other-beverage-flters">
                                            <li data-filter="*" className="filter-active">All</li>
                                            <li data-filter=".filter-coffee">Coffee</li>
                                            <li data-filter=".filter-smoothie">Smoothie</li>
                                            <li data-filter=".filter-tea">Tea</li>
                                            <li data-filter=".filter-tropical">Tropical</li>
                                        </ul>
                                    </div>
                                    <div className="derivations text-center">(C) - Cup | (M) - Mug</div>
                                    <div className="row menu-other-beverage-container" data-aos="fade-up" data-aos-delay="200">
                                        <div className="col-lg-6 menu-item filter-coffee">
                                            <img src="assets/img/04. Menu/Other Beverage/Coffee/Beetroot Velvet Latte - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Beetroot Velvet Latte</span><span>&#36;4.5 <span className="abbrevation">C</span> | &#36;5 <span className="abbrevation">M</span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-coffee">
                                            <img src="assets/img/04. Menu/Other Beverage/Coffee/Cappucino - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Cappuccino</span><span>&#36;4 <span className="abbrevation">C</span> | &#36;4.5 <span className="abbrevation">M</span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-coffee">
                                            <img src="assets/img/04. Menu/Other Beverage/Coffee/Espresso Piccolo - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Espresso Piccolo</span><span>&#36;3.8</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-coffee">
                                            <img src="assets/img/04. Menu/Other Beverage/Coffee/Flat White - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Flat White</span><span>&#36;4 <span className="abbrevation">C</span> | &#36;4.5 <span className="abbrevation">M</span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-coffee">
                                            <img src="assets/img/04. Menu/Other Beverage/Coffee/Hot Chocolate - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Hot Chocolate</span><span>&#36;4 <span className="abbrevation">C</span> | &#36;4.5 <span className="abbrevation">M</span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-coffee">
                                            <img src="assets/img/04. Menu/Other Beverage/Coffee/Matcha Double Espresso - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Matcha Double Espresso</span><span>&#36;4</span>
                                            </div>
                                        </div>
                                        {/* End of Coffee */}

                                        {/* smoothie */}
                                        <div className="col-lg-6 menu-item filter-smoothie ">
                                            <img src="assets/img/04. Menu/Other Beverage/Smoothie/Banana Milkshake - proportioned_170.png" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Banana Milkshake</span><span>&#36;9</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                w/ whipped cream, malt & sprinkles
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-smoothie">
                                            <img src="assets/img/04. Menu/Other Beverage/Smoothie/Blueberry Smoothie -  proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Blueberry Smoothie</span><span>&#36;9</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-smoothie">
                                            <img src="assets/img/04. Menu/Other Beverage/Smoothie/Chocolate Milkshake - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">Chocolate Milkshake</span><span>&#36;9</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                w/ whipped cream, malt & sprinkles
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-smoothie">
                                            <img src="assets/img/04. Menu/Other Beverage/Smoothie/Strawberry Milkshake -  proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content">
                                                <span className="menu-name">StrawberryMilkshake</span><span>&#36;9</span>
                                            </div>
                                            <div className="menu-ingredients">
                                                w/ whipped cream, malt & sprinkles
                                            </div>
                                        </div>
                                        {/* End of Smoothie */}

                                        {/* Tea */}
                                        <div className="col-lg-6 menu-item filter-tea">
                                            <img src="assets/img/04. Menu/Other Beverage/Tea/Brookvale Iced Tea - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Brookvale Iced Tea</span><span>&#36;4.2</span>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 menu-item filter-tea">
                                            <img src="assets/img/04. Menu/Other Beverage/Tea/English Breakfast Tea - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">English Breakfast Tea</span><span>&#36;4.2</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-tea">
                                            <img src="assets/img/04. Menu/Other Beverage/Tea/London Fog - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">London Fog</span><span>&#36;5.8</span>
                                            </div>
                                        </div>
                                        {/* End of Tea */}

                                        {/* Tropical */}
                                        <div className="col-lg-6 menu-item filter-tropical">
                                            <img src="assets/img/04. Menu/Other Beverage/Tropical/Coke Ginger Ale Lemonade Soda Tonic Zero - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Coke Zero, Ginger Ale, Lemonade, Soda, Tonic </span><span>&#36;4.8</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-tropical">
                                            <img src="assets/img/04. Menu/Other Beverage/Tropical/Mixed Veg Juice - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Mixed Veg Juice</span><span>&#36;4.8</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 menu-item filter-tropical">
                                            <img src="assets/img/04. Menu/Other Beverage/Tropical/Orange Juice -  proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Orange Juice</span><span>&#36;8.5</span>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 menu-item filter-tropical">
                                            <img src="assets/img/04. Menu/Other Beverage/Tropical/Strawberry Juice - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Strawberry Juice</span><span>&#36;9</span>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 menu-item filter-tropical">
                                            <img src="assets/img/04. Menu/Other Beverage/Tropical/Watermelon Juice  - proportioned_170.jpg" className="menu-img zoom" alt="" />
                                            <div className="menu-content2">
                                                <span className="menu-name">Watermelon Juice</span><span>&#36;9</span>
                                            </div>
                                        </div>
                                        {/* End of Tropical */}

                                    </div>
                                </div>
                                {/* End of Other Beverage */}


                            </div>

                        </div>



                    </div>
                </section>
            </>
        )
    }
})
