import React from "react";

class Main extends React.Component {
  render() {
    return (
      <main>
        {}
        <div className="slider-wrapper my-40 my-sm-25 float-left w-100">
          <div className="container">
            <div className="ttloading-bg" />
            <div className="slider slider-for owl-carousel">
              <div>
                <a href="#">
                  <img
                    src="img/slider/sample-01.jpg"
                    alt
                    height={800}
                    width={1600}
                  />
                </a>
                <div className="slider-content-wrap center effect_top">
                  <div className="slider-title mb-20 text-capitalize float-left w-100">
                    our specials
                  </div>
                  <div className="slider-subtitle mb-50 text-capitalize float-left w-100">
                    fashion trend
                  </div>
                  <div className="slider-button text-uppercase float-left w-100">
                    <a href=" #">Shop Now</a>
                  </div>
                </div>
              </div>
              <div>
                <a href="#">
                  <img
                    src="img/slider/sample-02.jpg"
                    alt
                    height={800}
                    width={1600}
                  />
                </a>
                <div className="slider-content-wrap center effect_bottom">
                  <div className="slider-title mb-20 text-capitalize float-left w-100">
                    about us
                  </div>
                  <div className="slider-subtitle mb-50 text-capitalize float-left w-100">
                    fashion style
                  </div>
                  <div className="slider-button text-uppercase float-left w-100">
                    <a href=" #">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div id="ttcmsbanner" className="ttcmsbanner my-40 my-sm-25">
            <div className="ttbannerblock container text-center">
              <div className="row">
                <div className="ttbanner1 ttbanner col-sm-6 col-xs-6 left-to-right hb-animate-element">
                  <div className="ttbanner-img">
                    <a href="#">
                      <img
                        src="img/banner/cms-01.jpg"
                        alt="cms-01"
                        height={600}
                        width={630}
                      />
                    </a>
                  </div>
                  <div className="ttbanner-inner d-inline-block align-top float-none">
                    <div className="ttbanner-desc float-left w-100">
                      <h2 className="ttbanner-heading text-uppercase float-left w-100">
                        Womens
                      </h2>
                      <span className="title text-uppercase float-left w-100 pb-3">
                        collection
                      </span>
                      <span className="subtitle float-left w-100 py-20">
                        Et harum quidem rerum facilis est et expedita m libero
                        tempore, cum solut
                      </span>
                      <span className="shop-now float-left w-100">
                        <a
                          href="#"
                          className="d-inline-block align-top float-none btn-primary"
                        >
                          Shop Now
                        </a>
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="ttbanner2 ttbanner col-sm-6 col-xs-6 right-to-left hb-animate-element">
                  <div className="ttbanner-img">
                    <a href="#">
                      <img
                        src="img/banner/cms-02.jpg"
                        alt="cms-02"
                        height={600}
                        width={630}
                      />
                    </a>
                  </div>
                  <div className="ttbanner-inner d-inline-block align-top float-none">
                    <div className="ttbanner-desc">
                      <h2 className="ttbanner-heading text-uppercase">Men's</h2>
                      <span className="title text-uppercase float-left w-100 pb-3">
                        collection
                      </span>
                      <span className="subtitle float-left w-100 py-20">
                        Et harum quidem rerum facilis est et expedita m libero
                        tempore, cum solut
                      </span>
                      <span className="shop-now float-left w-100">
                        <a
                          href="#"
                          className="d-inline-block align-top float-none btn-primary"
                        >
                          Shop Now
                        </a>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="main">
            <div
              id="hometab"
              className="home-tab my-40 my-sm-25 bottom-to-top hb-animate-element"
            >
              <div className="container">
                <div className="row">
                  <div className="tt-title d-inline-block float-none w-100 text-center">
                    Trending Products
                  </div>
                  <div className="tabs">
                    <ul className="nav nav-tabs justify-content-center">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#ttfeatured-main"
                          id="featured-tab"
                        >
                          <div className="tab-title">Featured</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#ttnew-main"
                          id="new-tab"
                        >
                          <div className="tab-title">Latest</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#ttbestseller-main"
                          id="bestseller-tab"
                        >
                          <div className="tab-title">Bestseller</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content float-left w-100">
                    <div
                      className="tab-pane active float-left w-100"
                      id="ttfeatured-main"
                      role="tabpanel"
                      aria-labelledby="featured-tab"
                    >
                      <section id="ttfeatured" className="ttfeatured-products">
                        <div
                          className="ttfeatured-content products grid owl-carousel"
                          id="owl1"
                        >
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/01.jpg"
                                    alt={"01"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/02.jpg"
                                    alt={"02"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>
                                <ul className="countdown1 countdown">
                                  <li>
                                    <span className="days">00</span>
                                    <p className="days_text">Days</p>
                                  </li>
                                  <li>
                                    <span className="hours">00</span>
                                    <p className="hours_text">Hours</p>
                                  </li>
                                  <li>
                                    <span className="minutes">00</span>
                                    <p className="minutes_text">Minutes</p>
                                  </li>
                                  <li>
                                    <span className="seconds">00</span>
                                    <p className="seconds_text">Seconds</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Merino Small Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                      disabled="disabled"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/02.jpg"
                                    alt={"02"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/03.jpg"
                                    alt={"03"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>
                                <div className="flags">
                                  <div className="sale">sale</div>
                                  <div className="new">new</div>
                                </div>
                                <ul className="countdown countdown2">
                                  <li>
                                    <span className="days">00</span>
                                    <p className="days_text">Days</p>
                                  </li>
                                  <li>
                                    <span className="hours">00</span>
                                    <p className="hours_text">Hours</p>
                                  </li>
                                  <li>
                                    <span className="minutes">00</span>
                                    <p className="minutes_text">Minutes</p>
                                  </li>
                                  <li>
                                    <span className="seconds">00</span>
                                    <p className="seconds_text">Seconds</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Tropical Shirt Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/03.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/04.jpg"
                                    alt={"04"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Shoulder Embroidered Bodysuit
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/04.jpg"
                                    alt={"04"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/05.jpg"
                                    alt={"05"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Checked Polo Collar T-shirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/05.jpg"
                                    alt={"05"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/06.jpg"
                                    alt={"06"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Crochet Detail Lightweight Top
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/06.jpg"
                                    alt={"06"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/07.jpg"
                                    alt={"07"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Girls Floral Print Jumpsuit
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/07.jpg"
                                    alt={"07"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/08.jpg"
                                    alt={"08"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Girls Striped Fit and Flare Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                      disabled="disabled"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/08.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/09.jpg"
                                    alt={"09"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Juventus Henley Neck Jersey
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div
                      className="tab-pane float-left w-100"
                      id="ttnew-main"
                      role="tabpanel"
                      aria-labelledby="new-tab"
                    >
                      <section id="ttnew" className="ttnew-products">
                        <div
                          className="ttnew-content products grid owl-carousel"
                          id="owl2"
                        >
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/01.jpg"
                                    alt={"01"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/02.jpg"
                                    alt={"02"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>
                                <ul className="countdown1 countdown">
                                  <li>
                                    <span className="days">00</span>
                                    <p className="days_text">Days</p>
                                  </li>
                                  <li>
                                    <span className="hours">00</span>
                                    <p className="hours_text">Hours</p>
                                  </li>
                                  <li>
                                    <span className="minutes">00</span>
                                    <p className="minutes_text">Minutes</p>
                                  </li>
                                  <li>
                                    <span className="seconds">00</span>
                                    <p className="seconds_text">Seconds</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Printed Dugaree with T-Shirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                      disabled="disabled"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/02.jpg"
                                    alt={"02"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/03.jpg"
                                    alt={"03"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Printed Polo Collar T-shirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/03.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/04.jpg"
                                    alt={"04"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Burgundy Small Dresss
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/04.jpg"
                                    alt={"04"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/05.jpg"
                                    alt={"05"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Merino Small Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/05.jpg"
                                    alt={"05"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/06.jpg"
                                    alt={"06"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Arkun Bordeaux Blouse
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/06.jpg"
                                    alt={"06"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/07.jpg"
                                    alt={"07"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Medium Denim Overshirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/07.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/08.jpg"
                                    alt={"08"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="#">Long Sleeves Cotton Polo</a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                      disabled="disabled"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/08.jpg"
                                    alt={"08"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/09.jpg"
                                    alt={"09"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Long Sleeves Cotton Polo
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div
                      className="tab-pane float-left w-100"
                      id="ttbestseller-main"
                      role="tabpanel"
                      aria-labelledby="bestseller-tab"
                    >
                      <section
                        id="ttbestseller"
                        className="ttbestseller-products"
                      >
                        <div
                          className="ttbestseller-content products grid owl-carousel"
                          id="owl3"
                        >
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/01.jpg"
                                    alt={"01"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/02.jpg"
                                    alt={"02"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>
                                <ul className="countdown1 countdown">
                                  <li>
                                    <span className="days">00</span>
                                    <p className="days_text">Days</p>
                                  </li>
                                  <li>
                                    <span className="hours">00</span>
                                    <p className="hours_text">Hours</p>
                                  </li>
                                  <li>
                                    <span className="minutes">00</span>
                                    <p className="minutes_text">Minutes</p>
                                  </li>
                                  <li>
                                    <span className="seconds">00</span>
                                    <p className="seconds_text">Seconds</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Slim-fit Leaf-Print Linen Shirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                      disabled="disabled"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/02.jpg"
                                    alt={"02"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/03.jpg"
                                    alt={"03"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Women Floral Print Lounge T-Shirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/03.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/04.jpg"
                                    alt={"04"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Women Striped Shirt Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/04.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/05.jpg"
                                    alt={"05"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Women Solid Bodycon Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/05.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                  <img
                                    src="img/products/06.jpg"
                                    alt={"06"}
                                    className="second_image img-responsive"
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Printed V-Neck T-shirt
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/06.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Solid Straight Kurta
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/07.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Tropical Shirt Dress
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                      disabled="disabled"
                                    >
                                      {" "}
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-layouts">
                            <div className="product-thumb">
                              <div className="image zoom">
                                <a href="product-details.html">
                                  <img
                                    src="img/products/08.jpg"
                                    alt={"03"}
                                    height={501}
                                    width={385}
                                  />
                                </a>
                              </div>
                              <div className="thumb-description">
                                <div className="caption">
                                  <h4 className="product-title text-capitalize">
                                    <a href="product-details.html">
                                      Shoulder Embroidered Bodysuit
                                    </a>
                                  </h4>
                                </div>
                                <div className="rating">
                                  <div className="product-ratings d-inline-block align-middle">
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>
                                    <span className="fa fa-stack">
                                      <i className="material-icons off">star</i>
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="price">
                                  <div className="regular-price">$100.00</div>
                                  <div className="old-price">$150.00</div>
                                </div>
                                <div className="button-wrapper">
                                  <div className="button-group text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-cart"
                                      data-target="#cart-pop"
                                      data-toggle="modal"
                                    >
                                      <i className="material-icons">
                                        shopping_cart
                                      </i>
                                      <span>Add to cart</span>
                                    </button>
                                    <a
                                      href="wishlist.html"
                                      className="btn btn-primary btn-wishlist"
                                    >
                                      <i className="material-icons">favorite</i>
                                      <span>wishlist</span>
                                    </a>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-compare"
                                    >
                                      <i className="material-icons">
                                        equalizer
                                      </i>
                                      <span>Compare</span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-quickview"
                                      data-toggle="modal"
                                      data-target="#product_view"
                                    >
                                      <i className="material-icons">
                                        visibility
                                      </i>
                                      <span>Quick View</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="ttcmstestimonial"
              className="my-40 my-sm-25 bottom-to-top hb-animate-element"
            >
              <div className="tttestimonial-content container">
                <div className="tttestimonial-inner">
                  <div className="tttestimonial owl-carousel">
                    <div>
                      <div className="testimonial-block">
                        <div className="testimonial-image">
                          <img
                            alt
                            src="img/banner/user1.jpg"
                            height={120}
                            width={120}
                          />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-desc">
                            <p>
                              Duis faucibus enim vitae nunc molestie, nec
                              facilisis arcu pulvinar. Nullam mattis arcu
                              convallis, bibendum dui ac, laoreet est.Vivamus
                              interdum egastas rutrum. Quisque laoreet ante sed
                              placerat imperdiet.
                            </p>
                          </div>
                          <div className="testimonial-user-title">
                            <h4>John Duff</h4>
                            <div className="user-designation">CEO</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial-block">
                        <div className="testimonial-image">
                          <img
                            alt
                            src="img/banner/user2.jpg"
                            height={120}
                            width={120}
                          />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-desc">
                            <p>
                              Duis faucibus enim vitae nunc molestie, nec
                              facilisis arcu pulvinar. Nullam mattis arcu
                              convallis, bibendum dui ac, laoreet est.Vivamus
                              interdum egastas rutrum. Quisque laoreet ante sed
                              placerat imperdiet.
                            </p>
                          </div>
                          <div className="testimonial-user-title">
                            <h4>Nazli dof</h4>
                            <div className="user-designation">
                              Marketing Manager
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial-block">
                        <div className="testimonial-image">
                          <img
                            alt
                            src="img/banner/user3.jpg"
                            height={120}
                            width={120}
                          />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-desc">
                            <p>
                              Duis faucibus enim vitae nunc molestie, nec
                              facilisis arcu pulvinar. Nullam mattis arcu
                              convallis, bibendum dui ac, laoreet est.Vivamus
                              interdum egastas rutrum. Quisque laoreet ante sed
                              placerat imperdiet.
                            </p>
                          </div>
                          <div className="testimonial-user-title">
                            <h4>Aly Vefa</h4>
                            <div className="user-designation">
                              Sales Exuctive
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="ttcmssubbanner"
              className="ttcmssubbanner my-40 my-sm-25 bottom-to-top hb-animate-element"
            >
              <div className="ttbannerblock container">
                <div className="row">
                  <div className="ttbanner1 ttbanner col-sm-6 col-xs-6">
                    <div className="ttbanner-img">
                      <a href="#">
                        <img
                          src="img/banner/cms-03.jpg"
                          alt="cms-03"
                          height={600}
                          width={400}
                        />
                      </a>
                    </div>
                    <div className="ttbanner-inner">
                      <div className="ttbanner-desc text-center">
                        <span className="title text-uppercase">
                          summer shop
                        </span>
                        <span className="subtitle text-uppercase py-20">
                          up to 70% off
                        </span>
                        <span className="shop-now text-capitalize">
                          <a href="#" className="btn-primary">
                            shop now
                          </a>
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="ttbanner2 ttbanner col-sm-6">
                    <div className="ttbanner-img">
                      <a href="#">
                        <img
                          src="img/banner/cms-04.jpg"
                          alt="cms-04"
                          height={600}
                          width={400}
                        />
                      </a>
                    </div>
                    <div className="ttbanner-inner">
                      <div className="ttbanner-desc text-center">
                        <span className="title text-uppercase">
                          winter shop
                        </span>
                        <span className="subtitle text-uppercase py-20">
                          up to 70% off
                        </span>
                        <span className="shop-now text-capitalize">
                          <a href="#" className="btn-primary">
                            shop now
                          </a>
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="ttspecial"
              className="ttspecial my-40 bottom-to-top hb-animate-element"
            >
              <div className="container">
                <div className="row">
                  <div className="tt-title d-inline-block float-none w-100 text-center">
                    special products
                  </div>
                  <div className="ttspecial-content products grid owl-carousel">
                    <div className="product-layouts">
                      <div className="product-thumb">
                        <div className="image zoom">
                          <a href="#">
                            <img
                              src="img/products/01.jpg"
                              alt={"01"}
                              height={501}
                              width={385}
                            />
                            <img
                              src="img/products/02.jpg"
                              alt={"02"}
                              className="second_image img-responsive"
                              height={501}
                              width={385}
                            />{" "}
                          </a>
                          <ul className="countdown3 countdown">
                            <li>
                              <span className="days">00</span>
                              <p className="days_text">Days</p>
                            </li>
                            <li>
                              <span className="hours">00</span>
                              <p className="hours_text">Hours</p>
                            </li>
                            <li>
                              <span className="minutes">00</span>
                              <p className="minutes_text">Minutes</p>
                            </li>
                            <li>
                              <span className="seconds">00</span>
                              <p className="seconds_text">Seconds</p>
                            </li>
                          </ul>
                        </div>
                        <div className="thumb-description">
                          <div className="caption">
                            <h4 className="product-title text-capitalize">
                              <a href="product-details.html">
                                Checked Polo Collar T-shirt
                              </a>
                            </h4>
                          </div>
                          <div className="rating">
                            <div className="product-ratings d-inline-block align-middle">
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>{" "}
                            </div>
                          </div>
                          <div className="price">
                            <div className="regular-price">$100.00</div>
                            <div className="old-price">$150.00</div>
                          </div>
                          <div className="button-wrapper">
                            <div className="button-group text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-toggle="modal"
                                data-target="#product_view"
                                disabled="disabled"
                              >
                                <i className="material-icons">shopping_cart</i>
                                <span>Add to cart</span>
                              </button>
                              <a
                                href="wishlist.html"
                                className="btn btn-primary btn-wishlist"
                              >
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                              </a>
                              <button
                                type="button"
                                className="btn btn-primary btn-compare"
                              >
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                              >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layouts">
                      <div className="product-thumb">
                        <div className="image zoom">
                          <a href="#">
                            <img
                              src="img/products/02.jpg"
                              alt={"02"}
                              height={501}
                              width={385}
                            />
                            <img
                              src="img/products/03.jpg"
                              alt={"03"}
                              className="second_image img-responsive"
                              height={501}
                              width={385}
                            />
                          </a>
                        </div>
                        <div className="thumb-description">
                          <div className="caption">
                            <h4 className="product-title text-capitalize">
                              <a href="product-details.html">
                                Crochet Detail Lightweight Top
                              </a>
                            </h4>
                          </div>
                          <div className="rating">
                            <div className="product-ratings d-inline-block align-middle">
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>{" "}
                            </div>
                          </div>
                          <div className="price">
                            <div className="regular-price">$100.00</div>
                            <div className="old-price">$150.00</div>
                          </div>
                          <div className="button-wrapper">
                            <div className="button-group text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-target="#cart-pop"
                                data-toggle="modal"
                              >
                                <i className="material-icons">shopping_cart</i>
                                <span>Add to cart</span>
                              </button>
                              <a
                                href="wishlist.html"
                                className="btn btn-primary btn-wishlist"
                              >
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                              </a>
                              <button
                                type="button"
                                className="btn btn-primary btn-compare"
                              >
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                              >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layouts">
                      <div className="product-thumb">
                        <div className="image zoom">
                          <a href="#">
                            <img
                              src="img/products/03.jpg"
                              alt={"03"}
                              height={501}
                              width={385}
                            />
                            <img
                              src="img/products/04.jpg"
                              alt={"04"}
                              className="second_image img-responsive"
                              height={501}
                              width={385}
                            />
                          </a>
                        </div>
                        <div className="thumb-description">
                          <div className="caption">
                            <h4 className="product-title text-capitalize">
                              <a href="product-details.html">
                                Girls Floral Print Jumpsuit
                              </a>
                            </h4>
                          </div>
                          <div className="rating">
                            <div className="product-ratings d-inline-block align-middle">
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>{" "}
                            </div>
                          </div>
                          <div className="price">
                            <div className="regular-price">$100.00</div>
                            <div className="old-price">$150.00</div>
                          </div>
                          <div className="button-wrapper">
                            <div className="button-group text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-target="#cart-pop"
                                data-toggle="modal"
                              >
                                <i className="material-icons">shopping_cart</i>
                                <span>Add to cart</span>
                              </button>
                              <a
                                href="wishlist.html"
                                className="btn btn-primary btn-wishlist"
                              >
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                              </a>
                              <button
                                type="button"
                                className="btn btn-primary btn-compare"
                              >
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                              >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layouts">
                      <div className="product-thumb">
                        <div className="image zoom">
                          <a href="#">
                            <img
                              src="img/products/04.jpg"
                              alt={"04"}
                              height={501}
                              width={385}
                            />
                            <img
                              src="img/products/05.jpg"
                              alt={"05"}
                              className="second_image img-responsive"
                              height={501}
                              width={385}
                            />
                          </a>
                        </div>
                        <div className="thumb-description">
                          <div className="caption">
                            <h4 className="product-title text-capitalize">
                              <a href="product-details.html">
                                Girls Striped Fit and Flare Dress
                              </a>
                            </h4>
                          </div>
                          <div className="rating">
                            <div className="product-ratings d-inline-block align-middle">
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>{" "}
                            </div>{" "}
                          </div>
                          <div className="price">
                            <div className="regular-price">$100.00</div>
                            <div className="old-price">$150.00</div>
                          </div>
                          <div className="button-wrapper">
                            <div className="button-group text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-target="#cart-pop"
                                data-toggle="modal"
                              >
                                <i className="material-icons">shopping_cart</i>
                                <span>Add to cart</span>
                              </button>
                              <a
                                href="wishlist.html"
                                className="btn btn-primary btn-wishlist"
                              >
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                              </a>
                              <button
                                type="button"
                                className="btn btn-primary btn-compare"
                              >
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                              >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layouts">
                      <div className="product-thumb">
                        <div className="image zoom">
                          <a href="#">
                            <img
                              src="img/products/05.jpg"
                              alt={"05"}
                              height={501}
                              width={385}
                            />
                            <img
                              src="img/products/06.jpg"
                              alt={"06"}
                              className="second_image img-responsive"
                              height={501}
                              width={385}
                            />{" "}
                          </a>{" "}
                        </div>
                        <div className="thumb-description">
                          <div className="caption">
                            <h4 className="product-title text-capitalize">
                              <a href="product-details.html">
                                Juventus Henley Neck Jersey
                              </a>
                            </h4>
                          </div>
                          <div className="rating">
                            <div className="product-ratings d-inline-block align-middle">
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>{" "}
                            </div>
                          </div>
                          <div className="price">
                            <div className="regular-price">$100.00</div>
                            <div className="old-price">$150.00</div>
                          </div>
                          <div className="button-wrapper">
                            <div className="button-group text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-target="#cart-pop"
                                data-toggle="modal"
                              >
                                <i className="material-icons">shopping_cart</i>
                                <span>Add to cart</span>
                              </button>
                              <a
                                href="wishlist.html"
                                className="btn btn-primary btn-wishlist"
                              >
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                              </a>
                              <button
                                type="button"
                                className="btn btn-primary btn-compare"
                              >
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                              >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layouts">
                      <div className="product-thumb">
                        <div className="image zoom">
                          <a href="#">
                            <img
                              src="img/products/06.jpg"
                              alt={"06"}
                              height={501}
                              width={385}
                            />
                            <img
                              src="img/products/07.jpg"
                              alt={"07"}
                              className="second_image img-responsive"
                              height={501}
                              width={385}
                            />
                          </a>
                        </div>
                        <div className="thumb-description">
                          <div className="caption">
                            <h4 className="product-title text-capitalize">
                              <a href="product-details.html">
                                Printed Dugaree with T-Shirt
                              </a>
                            </h4>
                          </div>
                          <div className="rating">
                            <div className="product-ratings d-inline-block align-middle">
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>
                              <span className="fa fa-stack">
                                <i className="material-icons off">star</i>
                              </span>{" "}
                            </div>
                          </div>
                          <div className="price">
                            <div className="regular-price">$100.00</div>
                            <div className="old-price">$150.00</div>
                          </div>
                          <div className="button-wrapper">
                            <div className="button-group text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-target="#cart-pop"
                                data-toggle="modal"
                              >
                                <i className="material-icons">shopping_cart</i>
                                <span>Add to cart</span>
                              </button>
                              <a
                                href="wishlist.html"
                                className="btn btn-primary btn-wishlist"
                              >
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                              </a>
                              <button
                                type="button"
                                className="btn btn-primary btn-compare"
                              >
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                              >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="ttsmartblog"
              className="my-40 my-sm-25 bottom-to-top hb-animate-element"
            >
              <div className="tt-title d-inline-block float-none w-100 text-center text-capitalize">
                latest news
              </div>
              <div className="container">
                <div className="row">
                  <div className="smartblog-content owl-carousel">
                    <div className="ttblog">
                      <div className="item">
                        <div className="ttblog_image_holder">
                          <a href="#">
                            <img
                              src="img/banner/blog-01.jpg"
                              alt="blog-01"
                              width={415}
                              height={269}
                            />{" "}
                          </a>
                          <span className="blogicons">
                            <a
                              title="Click to view Full Image"
                              href="img/banner/blog-01.jpg"
                              data-lightbox="example-set"
                              className="icon zoom"
                            >
                              <i className="material-icons">search</i>
                            </a>{" "}
                          </span>{" "}
                        </div>
                        <div className="blog-content-wrap float-left w-100">
                          <div className="blog_inner">
                            <h4 className="blog-title">
                              <span>Share the Love</span>
                            </h4>
                            <div className="blog-desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div className="read-more text-capitalize">
                              <a
                                title="Click to view Read More"
                                className="readmore"
                              >
                                read more
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ttblog">
                      <div className="item">
                        <div className="ttblog_image_holder">
                          <a href="#">
                            <img
                              src="img/banner/blog-02.jpg"
                              alt="blog-02"
                              width={415}
                              height={269}
                            />{" "}
                          </a>
                          <span className="blogicons">
                            <a
                              title="Click to view Full Image"
                              href="img/banner/blog-02.jpg"
                              data-lightbox="example-set"
                              className="icon zoom"
                            >
                              <i className="material-icons">search</i>
                            </a>{" "}
                          </span>{" "}
                        </div>
                        <div className="blog-content-wrap float-left w-100">
                          <div className="blog_inner">
                            <h4 className="blog-title">
                              <span>Upon of seasons earth</span>
                            </h4>
                            <div className="blog-desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div className="read-more text-capitalize">
                              <a
                                title="Click to view Read More"
                                className="readmore"
                              >
                                read more
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ttblog">
                      <div className="item">
                        <div className="ttblog_image_holder">
                          <a href="#">
                            <img
                              src="img/banner/blog-03.jpg"
                              alt="blog-03"
                              width={415}
                              height={269}
                            />{" "}
                          </a>
                          <span className="blogicons">
                            <a
                              title="Click to view Full Image"
                              href="img/banner/blog-03.jpg"
                              data-lightbox="example-set"
                              className="icon zoom"
                            >
                              <i className="material-icons">search</i>
                            </a>{" "}
                          </span>{" "}
                        </div>
                        <div className="blog-content-wrap float-left w-100">
                          <div className="blog_inner">
                            <h4 className="blog-title">
                              <span>From Now we are certified web</span>
                            </h4>
                            <div className="blog-desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div className="read-more text-capitalize">
                              <a
                                title="Click to view Read More"
                                className="readmore"
                              >
                                read more
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ttblog">
                      <div className="item">
                        <div className="ttblog_image_holder">
                          <a href="#">
                            <img
                              src="img/banner/blog-04.jpg"
                              alt="blog-04"
                              width={415}
                              height={269}
                            />{" "}
                          </a>
                          <span className="blogicons">
                            <a
                              title="Click to view Full Image"
                              href="img/banner/blog-04.jpg"
                              data-lightbox="example-set"
                              className="icon zoom"
                            >
                              <i className="material-icons">search</i>
                            </a>{" "}
                          </span>{" "}
                        </div>
                        <div className="blog-content-wrap float-left w-100">
                          <div className="blog_inner">
                            <h4 className="blog-title">
                              <span>Viderer voluptatum te eum</span>
                            </h4>
                            <div className="blog-desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div className="read-more text-capitalize">
                              <a
                                title="Click to view Read More"
                                className="readmore"
                              >
                                read more
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ttblog">
                      <div className="item">
                        <div className="ttblog_image_holder">
                          <a href="#">
                            <img
                              src="img/banner/blog-05.jpg"
                              alt="blog-05"
                              width={415}
                              height={269}
                            />{" "}
                          </a>
                          <span className="blogicons">
                            <a
                              title="Click to view Full Image"
                              href="img/banner/blog-05.jpg"
                              data-lightbox="example-set"
                              className="icon zoom"
                            >
                              <i className="material-icons">search</i>
                            </a>{" "}
                          </span>{" "}
                        </div>
                        <div className="blog-content-wrap float-left w-100">
                          <div className="blog_inner">
                            <h4 className="blog-title">
                              <span>Share the Love</span>
                            </h4>
                            <div className="blog-desc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </div>
                            <div className="read-more text-capitalize">
                              <a
                                title="Click to view Read More"
                                className="readmore"
                              >
                                read more
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="ttbrandlogo"
              className="my-40 my-sm-25 bottom-to-top hb-animate-element"
            >
              <div className="container">
                <div className="tt-brand owl-carousel">
                  <div className="item">
                    <a href="#">
                      <img
                        src="img/logos/brand-logo-01.png"
                        alt="brand-logo-01"
                        width={140}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img
                        src="img/logos/brand-logo-02.png"
                        alt="brand-logo-02"
                        width={140}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img
                        src="img/logos/brand-logo-03.png"
                        alt="brand-logo-03"
                        width={140}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img
                        src="img/logos/brand-logo-04.png"
                        alt="brand-logo-04"
                        width={140}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img
                        src="img/logos/brand-logo-05.png"
                        alt="brand-logo-05"
                        width={140}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img
                        src="img/logos/brand-logo-06.png"
                        alt="brand-logo-06"
                        width={140}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
