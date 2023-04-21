import React, { useLayoutEffect, useState } from 'react'
import Logo from "../../../img/Navbar/BREW-WORD_white-logo.png"
import './Photos.css'

const foods = [
    {
        name: 'Jackfruit Burger',
        url: 'assets/img/05. Gallery/food/food01 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food01 - maxSize 1264-1368.jpg',
        url3: 'assets/img/05. Gallery/food/food01 - phone_450.jpg'
    },
    {
        name: 'Egg & Cheese Burger',
        url: 'assets/img/05. Gallery/food/food02 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food02 - maxSize 1228-1368.jpg',
        url3: 'assets/img/05. Gallery/food/food02 - phone_450.jpg'
    },
    {
        name: 'Churros',
        url: 'assets/img/05. Gallery/food/food03 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food03 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/food/food03 - phone_450.jpg'
    },
    {
        name: 'Fritters',
        url: 'assets/img/05. Gallery/food/food04 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food04 - maxSize .jpg',
        url3: 'assets/img/05. Gallery/food/food04 - phone_450.jpg'
    },
    {
        name: 'Bircher',
        url: 'assets/img/05. Gallery/food/food05 - - original.png',
        url2: 'assets/img/05. Gallery/food/food05 - maxSize.png',
        url3: 'assets/img/05. Gallery/food/food05 - phone_450.jpg'
    },
    {
        name: 'Honey Berry Pancake',
        url: 'assets/img/05. Gallery/food/food06 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food06 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/food/food06 - phone_450.jpg'
    },
    {
        name: 'Bean Taco',
        url: 'assets/img/05. Gallery/food/food07 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food07 - maxSize .jpg',
        url3: 'assets/img/05. Gallery/food/food07 - phone_450.jpg'
    },
    {
        name: 'Taco',
        url: 'assets/img/05. Gallery/food/food08 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/food/food08 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/food/food08 - phone_450.jpg'
    }
]

const bars = [
    {
        name: 'Classic Cocktail',
        url: 'assets/img/05. Gallery/bar/bar01 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar01  - maxSize 947-1368.jpg',
        url3: 'assets/img/05. Gallery/bar/bar01 - phone_450.jpg'
    },
    {
        name: 'Negroni Cocktail',
        url: 'assets/img/05. Gallery/bar/bar02 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar02 - maxSize 1094-1368.jpg',
        url3: 'assets/img/05. Gallery/bar/bar02 - phone_450.jpg'
    },
    {
        name: 'Tap Beer',
        url: 'assets/img/05. Gallery/bar/bar03 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar03 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/bar/bar03 - phone_450.jpg'
    },
    {
        name: 'Irish Whisky',
        url: 'assets/img/05. Gallery/bar/bar04 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar04  - maxSize 1094-1368.jpg',
        url3: 'assets/img/05. Gallery/bar/bar04 - phone_450.jpg'
    },
    {
        name: 'Irish Cream Cocktail',
        url: 'assets/img/05. Gallery/bar/bar05  - original.jpg',
        url2: 'assets/img/05. Gallery/bar/bar05 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/bar/bar05 - phone_450.jpg'
    },
    {
        name: "Flamin' Dragon Blood",
        url: 'assets/img/05. Gallery/bar/bar06 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar06 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/bar/bar06 - phone_450.jpg'
    },
    {
        name: 'Whiskey Shot',
        url: 'assets/img/05. Gallery/bar/bar07 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar07  - maxSize 1488-1368.jpg',
        url3: 'assets/img/05. Gallery/bar/bar07 - phone_450.jpg'
    },
    {
        name: 'Tap Ginger Beer',
        url: 'assets/img/05. Gallery/bar/bar08 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/bar/bar08 - maxSize .jpg',
        url3: 'assets/img/05. Gallery/bar/bar08 - phone_450.jpg'
    }
]

const outdoors = [
    {
        name: 'Outdoors',
        url: 'assets/img/05. Gallery/outdoors/outdoor01 - desktop_818.jpg',
        url2: 'assets/img/05. Gallery/outdoors/outdoor0 - maxSize- 1710-1368.jpg',
        url3: 'assets/img/05. Gallery/outdoors/outdoor01 - phone_450.jpg'
    },
    {
        name: 'Brew at Night',
        url: 'assets/img/05. Gallery/outdoors/outdoor02 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/outdoors/outdoor02 - maxSize_912-1368.jpg',
        url3: 'assets/img/05. Gallery/outdoors/outdoor02 - phone_450.jpg'
    },
    {
        name: 'Burger & Beer',
        url: 'assets/img/05. Gallery/outdoors/outdoor03 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/outdoors/outdoor03 - maxSize- 1021-1362.jpg',
        url3: 'assets/img/05. Gallery/outdoors/outdoor03 - phone_450.jpg'
    },
    {
        name: 'Evening at Brew',
        url: 'assets/img/05. Gallery/outdoors/outdoor04 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/outdoors/outdoor04 maxSize - 912-1368.jpg',
        url3: 'assets/img/05. Gallery/outdoors/outdoor04 - phone_450.jpg'
    },
    {
        name: 'Beer Alley',
        url: 'assets/img/05. Gallery/outdoors/outdoor05 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/outdoors/outdoor05 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/outdoors/outdoor05 - phone_450.jpg'
    },
    {
        name: 'Graffiti',
        url: 'assets/img/05. Gallery/outdoors/outdoor06 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/outdoors/outdoor06 - maxSize .jpg',
        url3: 'assets/img/05. Gallery/outdoors/outdoor06 - phone_450.jpg'
    }
]

const drinks = [
    {
        name: 'Lemon Alcoholic Drink',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink01 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink01  - maxSize 1108-1368.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink01 - phone_450.jpg'
    },
    {
        name: 'Green Apple Juice',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink02 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink02  - maxSize 1269-1368.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink02 - phone_450.jpg'
    },
    {
        name: 'Orange Juice',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink03 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink03 - maxSize 1167-1373.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink03 - phone_450.jpg'
    },
    {
        name: 'Casa Bianca Prosecco',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink04 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink04 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink04 - phone_450.jpg'
    },
    {
        name: 'Strwberry Juice',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink05  - original.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink05 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink05 - phone_450.jpg'
    },
    {
        name: 'Esspresso Martini',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink06 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink06 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink06 - phone_450.jpg'
    },
    {
        name: 'Aperol Spritz',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink07  - original.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink07 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink07 - phone_450.jpg'
    },
    {
        name: 'Shaken & Stirred Mobile Cocktail',
        url: 'assets/img/05. Gallery/tropical drinks/tropicalDrink08 - desktop_820.jpg',
        url2: 'assets/img/05. Gallery/tropical drinks/tropicalDrink08 - maxSize.jpg',
        url3: 'assets/img/05. Gallery/tropical drinks/tropicalDrink08 - phone_450.jpg'
    }
]


function Photos() {

    const mql = window.matchMedia("(max-width: 450px)");
    const [mobileView, setMobileView] = useState(mql.matches);

    useLayoutEffect(() => {
        function updateMobileView() {
            setMobileView(mql.matches);
        }
        window.addEventListener("resize", updateMobileView);
        return () => window.removeEventListener("resize", updateMobileView);
    });


    if (!mobileView) {
        return (
            <>
                <section id="photos" className="portfolio section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Photos</h2>
                            <p className="long-text"><img src={Logo} height="50" alt="" /> Photo Album</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                <ul id="portfolio-filters">
                                    <li id="starting" data-filter=".filter-outdoors" className="filter-active">Outdoors</li>
                                    <li data-filter=".filter-food">Food</li>
                                    <li data-filter=".filter-drinks">Tropical Drinks</li>
                                    <li data-filter=".filter-bar">Bar</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            {bars.map((bar, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-bar">
                                    <div className="portfolio-wrap">
                                        <a href={bar.url2} className="venobox" data-gall="05. Gallery-item2">
                                            <div className="gallery-hover-container">
                                                <picture>
                                                    {/* <img effect="blur" src={bar.url} alt="" className="img-fluid image desktop-gallery" /> */}
                                                    {/* <img effect="blur" src={bar.url3} alt="" className="img-fluid image phone-gallery" /> */}
                                                    <source
                                                        media="(max-width: 450px)"
                                                        srcset={bar.url3}
                                                    />
                                                    <source media="(min-width: 451px)" srcset={bar.url} />
                                                    <img src={bar.url} alt="" class="img-fluid image" />
                                                </picture>
                                                <div className="portfolio-info">  <h4>{bar.name}</h4>   </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}

                            {foods.map((food, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-food">
                                    <div className="portfolio-wrap">
                                        <a href={food.url2} className="venobox" data-gall="05. Gallery-item2">
                                            <div className="gallery-hover-container">
                                                <picture>
                                                    <source
                                                        media="(max-width: 450px)"
                                                        srcset={food.url3}
                                                    />
                                                    <source media="(min-width: 451px)" srcset={food.url} />
                                                    <img src={food.url} alt="" class="img-fluid image" />
                                                </picture>
                                                <div className="portfolio-info">  <h4>{food.name}</h4>   </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}

                            {outdoors.map((outdoor, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-outdoors">
                                    <div className="portfolio-wrap">
                                        <a href={outdoor.url2} className="venobox" data-gall="05. Gallery-item2">
                                            <div className="gallery-hover-container">
                                                <picture>
                                                    <source
                                                        media="(max-width: 450px)"
                                                        srcset={outdoor.url3}
                                                    />
                                                    <source media="(min-width: 451px)" srcset={outdoor.url} />
                                                    <img src={outdoor.url} alt="" class="img-fluid image" />
                                                </picture>
                                                <div className="portfolio-info"> <h4>{outdoor.name}</h4> </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}

                            {drinks.map((drink, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-drinks">
                                    <div className="portfolio-wrap">
                                        <a href={drink.url2} className="venobox" data-gall="05. Gallery-item2">
                                            <div className="gallery-hover-container">
                                                <picture>
                                                    <source
                                                        media="(max-width: 450px)"
                                                        srcset={drink.url3}
                                                    />
                                                    <source media="(min-width: 451px)" srcset={drink.url} />
                                                    <img src={drink.url} alt="" class="img-fluid image" />
                                                </picture>
                                                <div className="portfolio-info">  <h4>{drink.name}</h4>   </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    else {
        return (
            <>
                <section id="photos" className="portfolio section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Photos</h2>
                            <p className="long-text"><img src={Logo} height="50" alt="" /> Photo Album</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                <ul id="portfolio-filters">
                                    <li id="starting" data-filter=".filter-outdoors" className="filter-active">Outdoors</li>
                                    <li data-filter=".filter-food">Food</li>
                                    <li data-filter=".filter-drinks">Tropical Drinks</li>
                                    <li data-filter=".filter-bar">Bar</li>
                                </ul>
                            </div>
                        </div>


                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            {/* Bar */}
                            {bars.map((bar, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-bar">
                                    <div className="portfolio-wrap">
                                        <div className="gallery-hover-container">
                                            <picture>
                                                <source
                                                    media="(max-width: 450px)"
                                                    srcset={bar.url3}
                                                />
                                                <source media="(min-width: 451px)" srcset={bar.url} />
                                                <img src={bar.url3} alt="" class="img-fluid image" />
                                            </picture>
                                            <div className="portfolio-info">  <h4>{bar.name}</h4>   </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* End of Bar */}

                            {/* food */}
                            {foods.map((food, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-food">
                                    <div className="portfolio-wrap">
                                        <div className="gallery-hover-container">
                                            <picture>
                                                <source
                                                    media="(max-width: 450px)"
                                                    srcset={food.url3}
                                                />
                                                <source media="(min-width: 451px)" srcset={food.url} />
                                                <img src={food.url3} alt="" class="img-fluid image" />
                                            </picture>
                                            <div className="portfolio-info">  <h4>{food.name}</h4>   </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* End of Food */}

                            {/* outdoors */}
                            {outdoors.map((outdoor, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-outdoors">
                                    <div className="portfolio-wrap">
                                        <div className="gallery-hover-container">
                                            <picture>
                                                <source
                                                    media="(max-width: 450px)"
                                                    srcset={outdoor.url3}
                                                />
                                                <source media="(min-width: 451px)" srcset={outdoor.url} />
                                                <img src={outdoor.url3} alt="" class="img-fluid image" />
                                            </picture>
                                            <div className="portfolio-info">  <h4>{outdoor.name}</h4>   </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* End of outdoors */}

                            {/* drinks */}
                            {drinks.map((drink, index) => (
                                <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-drinks">
                                    <div className="portfolio-wrap">
                                        <div className="gallery-hover-container">
                                            <picture>
                                                <source
                                                    media="(max-width: 450px)"
                                                    srcset={drink.url3}
                                                />
                                                <source media="(min-width: 451px)" srcset={drink.url} />
                                                <img src={drink.url3} alt="" class="img-fluid image" />
                                            </picture>
                                            <div className="portfolio-info">  <h4>{drink.name}</h4>   </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* End of drinks */}

                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default Photos;