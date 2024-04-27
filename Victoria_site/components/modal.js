import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-medium text-left">
                Sign up
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-4">
                <input
                  type="text"
                  id="RegisterForm-name"
                  className="form-control validate"
                  placeholder="Your name"
                />
              </div>
              <div className="md-form mb-4">
                <input
                  type="email"
                  id="RegisterForm-email"
                  className="form-control validate"
                  placeholder="Your email"
                />
              </div>
              <div className="md-form mb-4">
                <input
                  type="password"
                  id="RegisterForm-pass"
                  className="form-control validate"
                  placeholder="Your password"
                />
              </div>
              <div className="checkbox-link d-flex justify-content-between">
                <div className="left-col">
                  <input id="remember-me" type="checkbox" />
                  <label htmlFor="remember_me">Remember Me</label>
                </div>
                <div className="right-col">
                  <a href="#">Forget Password?</a>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
