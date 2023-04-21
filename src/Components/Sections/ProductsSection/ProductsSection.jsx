import React, { useState } from "react";
import "./ProductsSection.css";
import WebText from "../../../WebText";
import Product from "./Product";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function ProductsSection() {
  const { t } = useTranslation();
  const [cat, setCat] = useState("starter");
  const [catAlcoholic, setAlcoholic] = useState("");
  // const [catBeverage, setCatBeverage] = useState("");

  function CategoryToggle(dataFilter, id) {
    setCat(dataFilter);
    if (dataFilter === "alcoholic") {
      setAlcoholic("alcoholic-cocktail");
    } else if (dataFilter === "soup") {
      setAlcoholic("soup-coffee");
    } else {
      setAlcoholic("");
      // setCatBeverage("")
    }

    let buttons = document.getElementsByClassName("filter-button");
    Object.entries(buttons).forEach((button) => {
      button[1].classList.remove("active");

      if (id === button[1].id) {
        button[1].classList.add("active");
      }
    });
  }

  function alcoholicToggle(dataFilter, id) {
    setAlcoholic(dataFilter);
    let lis = document.getElementsByClassName("filter-grocery");
    Object.entries(lis).forEach((li) => {
      li[1].classList.remove("active");
      if (id === li[1].id) {
        li[1].classList.add("active");
      }
    });
  }

  return (
    <>
      <section id="menu" className="menu section-bg">
        <div className="container">
          <div className="section-title mb-0 pb-2">
            <h2>{t("menu-menu")}</h2>
            <p className="long-text">{t("menu-check")}</p>
            <p className="small-text">{t("menu-check-mobile")}</p>
          </div>
          <div className="menu-info pb-0 pt-0">
            <p>
              15% surcharge applies on public holidays <br />
            </p>
          </div>

          <div className="season-button mb-2">
            {/* click function on Environment has been called in index.html, onLoad to filter according to environment category */}
            <button
              className="filter-button active"
              onClick={() => {
                CategoryToggle("starter", "starter");
              }}
              data-filter="starter"
              id="starter"
            >
              Starter
            </button>
            <button
              className="filter-button"
              onClick={() => {
                CategoryToggle("dayMenu", "dayMenu");
              }}
              data-filter="dayMenu"
              id="dayMenu"
            >
              Day Menu
            </button>
            <button
              className="filter-button"
              onClick={() => {
                CategoryToggle("lunch", "lunch");
              }}
              data-filter="lunch"
              id="lunch"
            >
              Meal
            </button>
            <button
              className="filter-button"
              onClick={() => {
                CategoryToggle("dessert", "dessert");
              }}
              data-filter="dessert"
              id="dessert"
            >
              Dessert
            </button>
            <button
              className="filter-button"
              onClick={() => {
                CategoryToggle("alcoholic", "alcoholic");
              }}
              data-filter="alcoholic"
              id="alcoholic"
            >
              Alcohol
            </button>
            <button
              className="filter-button"
              onClick={() => {
                CategoryToggle("soup", "soup");
              }}
              data-filter="soup"
              id="soup"
            >
              Beverage
            </button>
          </div>
          <div className="season-button mobile-btn">
            <Swiper
              spaceBetween={6}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <button
                  className="season-button active"
                  onClick={() => {
                    CategoryToggle("starter", "starter");
                  }}
                  data-filter="starter"
                  id="starter"
                >
                  Starter
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button
                  className="filter-button"
                  onClick={() => {
                    CategoryToggle("dayMenu", "dayMenu");
                  }}
                  data-filter="dayMenu"
                  id="dayMenu"
                >
                  Day Menu
                </button>
              </SwiperSlide>
              <SwiperSlide><button
                className="filter-button"
                onClick={() => {
                  CategoryToggle("lunch", "lunch");
                }}
                data-filter="lunch"
                id="lunch"
              >
                Meal
              </button>
              </SwiperSlide>
              <SwiperSlide>
                <button
                  className="filter-button"
                  onClick={() => {
                    CategoryToggle("dessert", "dessert");
                  }}
                  data-filter="dessert"
                  id="dessert"
                >
                  Dessert
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button
                  className="filter-button"
                  onClick={() => {
                    CategoryToggle("alcoholic", "alcoholic");
                  }}
                  data-filter="alcoholic"
                  id="alcoholic"
                >
                  Alcohol
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button
                  className="filter-button"
                  onClick={() => {
                    CategoryToggle("soup", "soup");
                  }}
                  data-filter="soup"
                  id="soup"
                >
                  Beverage
                </button>
              </SwiperSlide>
            </Swiper>
          </div>

          {cat === "alcoholic" ||
            catAlcoholic === "alcoholic-cocktail" ||
            catAlcoholic === "alcoholic-beer" ||
            catAlcoholic === "alcoholic-wine" ? (
            <div>
              <div className="grocery-items">
                <ul id="grocery-filters" className="d-flex">
                  <li
                    className="filter-grocery active"
                    onClick={() => {
                      alcoholicToggle("alcoholic-cocktail", "alcoholic1");
                    }}
                    data-filter="alcoholic-cocktail"
                    id="alcoholic1"
                  >
                    Cocktail
                  </li>
                  <li
                    className="filter-grocery mx-3"
                    onClick={() => {
                      alcoholicToggle("alcoholic-beer", "alcoholic2");
                    }}
                    data-filter="alcoholic-beer"
                    id="alcoholic2"
                  >
                    Tap Beer
                  </li>
                  <li
                    className="filter-grocery"
                    onClick={() => {
                      alcoholicToggle("alcoholic-wine", "alcoholic3");
                    }}
                    data-filter="alcoholic-wine"
                    id="alcoholic3"
                  >
                    Wine
                  </li>
                </ul>
              </div>
            </div>
          ) : null}

          {cat === "soup" ||
            catAlcoholic === "soup-coffee" ||
            catAlcoholic === "soup-smoothie" ||
            catAlcoholic === "soup-tea" ||
            catAlcoholic === "soup-tropical" ? (
            <div>
              <div class="derivations text-center">(C) - Cup | (M) - Mug</div>
              <div className="grocery-items">
                <ul id="grocery-filters" className="d-flex">
                  <li
                    className="filter-grocery active"
                    onClick={() => {
                      alcoholicToggle("soup-coffee", "alcoholic1");
                    }}
                    data-filter="soup-coffee"
                    id="alcoholic1"
                  >
                    Coffee
                  </li>
                  <li
                    className="filter-grocery mx-3"
                    onClick={() => {
                      alcoholicToggle("soup-smoothie", "alcoholic2");
                    }}
                    data-filter="soup-smoothie"
                    id="alcoholic2"
                  >
                    Smoothie
                  </li>
                  <li
                    className="filter-grocery"
                    onClick={() => {
                      alcoholicToggle("soup-tea", "alcoholic3");
                    }}
                    data-filter="soup-tea"
                    id="alcoholic3"
                  >
                    Tea
                  </li>
                  <li
                    className="filter-grocery ms-3"
                    onClick={() => {
                      alcoholicToggle("soup-tropical", "alcoholic4");
                    }}
                    data-filter="soup-tropical"
                    id="alcoholic4"
                  >
                    Tropical
                  </li>
                </ul>
              </div>
            </div>
          ) : null}

          {cat === "alcoholic" ||
            catAlcoholic === "alcoholic-cocktail" ||
            catAlcoholic === "alcoholic-beer" ||
            catAlcoholic === "alcoholic-wine" ? (
            <div className="season">
              <div className="row my-5">
                {WebText.products.map((product, i) =>
                  product.category === catAlcoholic ? (
                    <div className="col-lg-6 menu-item">
                      <Product data={product} key={i} />{" "}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : null}

          {cat === "soup" ||
            catAlcoholic === "soup-coffee" ||
            catAlcoholic === "soup-smoothie" ||
            catAlcoholic === "soup-tea" ||
            catAlcoholic === "soup-tropical" ? (
            <div className="season">
              <div className="row my-5">
                {WebText.products.map((product, i) =>
                  product.category === catAlcoholic ? (
                    <div className="col-lg-6 menu-item">
                      <Product data={product} key={i} />{" "}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : null}

          <div className="season">
            <div className="row mt-5">
              {WebText.products.map((product, i) =>
                product.category === cat ? (
                  <div className="col-lg-6 menu-item">
                    <Product data={product} key={i} />{" "}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default ProductsSection;