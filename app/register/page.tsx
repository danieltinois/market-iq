export default function Register() {
  return (
    <div className="bg-gradient-primary d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row d-flex vh-100 justify-content-center align-items-center">
          <div className="col">
            <div className="card shadow-lg my-5 o-hidden border-0">
              <div className="card-body p-0">
                <div className="row">
                  <div
                    className="col-lg-5 d-none d-lg-flex bg-register-image"
                    style={{
                      backgroundImage: 'url("/img/dogs/image2.jpeg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>

                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Create an Account!</h4>
                      </div>

                      <form className="user">
                        <div className="mb-3 row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              className="form-control form-control-user"
                              type="text"
                              placeholder="First Name"
                              name="first_name"
                            />
                          </div>

                          <div className="col-sm-6">
                            <input
                              className="form-control form-control-user"
                              type="text"
                              placeholder="Last Name"
                              name="last_name"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                          />
                        </div>

                        <div className="mb-3 row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              placeholder="Password"
                              name="password"
                            />
                          </div>

                          <div className="col-sm-6">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              placeholder="Repeat Password"
                              name="password_repeat"
                            />
                          </div>
                        </div>

                        <button
                          className="btn btn-primary d-block w-100 btn-user"
                          type="submit"
                        >
                          Register Account
                        </button>

                        <hr />

                        <button className="btn btn-google d-block w-100 mb-2 btn-user">
                          <i className="fab fa-google"></i> &nbsp; Register with
                          Google
                        </button>

                        <button className="btn btn-facebook d-block w-100 btn-user">
                          <i className="fab fa-facebook-f"></i> &nbsp; Register
                          with Facebook
                        </button>

                        <hr />
                      </form>

                      <div className="text-center">
                        <a className="small" href="/forgot-password">
                          Forgot Password?
                        </a>
                      </div>

                      <div className="text-center">
                        <a className="small" href="/login">
                          Already have an account? Login!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
