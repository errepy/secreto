import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small footer-default">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-2 footer-cms footer-column">
              <div className="ttcmsfooter">
                <div className="footer-logo">
                  <img
                    src="img/logos/footer-logo.png"
                    alt="footer-logo"
                    width={200}
                    height={50}
                  />
                </div>
                <div className="footer-desc">
                  At vero eos et accusamus et iusto odio dignissimos ducimus,
                  duis faucibus enim vitae
                </div>
              </div>
            </div>
            <div className="col-md-2 footer-column">
              <div className="title">
                <a
                  href="#company"
                  className="font-weight-normal text-capitalize mb-10"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  company
                </a>{" "}
              </div>
              <ul id="company" className="list-unstyled collapse">
                <li>
                  <a href="#">search</a>{" "}
                </li>
                <li>
                  <a href="#">New Products</a>{" "}
                </li>
                <li>
                  <a href="category.html">Best Collection</a>{" "}
                </li>
                <li>
                  <a href="wishlist.html">wishlist</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-2 footer-column">
              <div className="title">
                <a
                  href="#products"
                  className="font-weight-normal text-capitalize mb-10"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  products
                </a>{" "}
              </div>
              <ul id="products" className="list-unstyled collapse">
                <li>
                  <a href="blog-details.html">blog</a>{" "}
                </li>
                <li>
                  <a href="about-us.html">about us</a>{" "}
                </li>
                <li>
                  <a href="contact-us.html">contact us</a>{" "}
                </li>
                <li>
                  <a href="my-account.html">my account</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-2 footer-column">
              <div className="title">
                <a
                  href="#account"
                  className="font-weight-normal text-capitalize mb-10"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  your account
                </a>{" "}
              </div>
              <ul id="account" className="list-unstyled collapse">
                <li>
                  <a href="blog-details.html">personal info</a>{" "}
                </li>
                <li>
                  <a href="#">orders</a>{" "}
                </li>
                <li>
                  <a href="contact-us.html">addresses</a>{" "}
                </li>
                <li>
                  <a href="my-account.html">my wishlists</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-2 footer-column">
              <div className="title">
                <a
                  href="#information"
                  className="font-weight-normal text-capitalize mb-10"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  store information
                </a>{" "}
              </div>
              <ul id="information" className="list-unstyled collapse">
                <li className="contact-detail links">
                  <span className="address">
                    <span className="icon">
                      <i className="material-icons">location_on</i>
                    </span>
                    <span className="data">
                      {" "}
                      4030, Central Bazzar, opp. Varachha Police Station,
                      Varachha Main Road, Surat, Gujarat 395006, India
                    </span>{" "}
                  </span>{" "}
                </li>
                <li className="links">
                  <span className="contact">
                    <span className="icon">
                      <i className="material-icons">phone</i>
                    </span>
                    <span className="data">
                      <a href="tel:(99)55669999">+ (99) 55-669-999</a>
                    </span>{" "}
                  </span>{" "}
                </li>
                <li className="links">
                  <span className="email">
                    <span className="icon">
                      <i className="material-icons">email</i>
                    </span>
                    <span className="data">
                      <a href="mailto:demo.store@gmail.com">
                        demo.store@gmail.com
                      </a>
                    </span>
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {}
        <div className="footer-bottom-wrap">
          <div className="container">
            <div className="row">
              <div className="footer-copyright text-center py-3">
                © 2019 - Boostrap theme by store™
              </div>
            </div>
          </div>
        </div>
        <a href="#" id="goToTop" title="Back to top" className="btn-primary">
          <i className="material-icons arrow-up">keyboard_arrow_up</i>
        </a>
      </footer>
    );
  }
}

export default Footer;
