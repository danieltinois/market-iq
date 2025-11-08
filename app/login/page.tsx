export default function Login() {
  return (
    <div className="bg-gradient-primary d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div
                    className="col-lg-6 d-none d-lg-block bg-login-image"
                    style={{
                      backgroundImage: 'url("/img/dogs/image3.jpeg")',
                    }}
                  ></div>

                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                      </div>

                      <form className="user">
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            placeholder="Enter Email Address..."
                          />
                        </div>

                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Password"
                          />
                        </div>

                        <div className="mb-3">
                          <div className="form-check small">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-1"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary w-100 btn-user"
                        >
                          Login
                        </button>

                        <hr />

                        <button className="btn btn-google w-100 mb-2 btn-user">
                          <i className="fab fa-google"></i> Login with Google
                        </button>

                        <button className="btn btn-facebook w-100 btn-user">
                          <i className="fab fa-facebook-f"></i> Login with
                          Facebook
                        </button>

                        <hr />
                      </form>

                      <div className="text-center">
                        <a className="small" href="/forgot-password">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/register">
                          Create an Account!
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
