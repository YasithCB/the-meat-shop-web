import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { User, LogOut  } from 'lucide-react';
import {login} from "../../api/authAPI.js";
import {useContextElement} from "../../context/Context.jsx";
import LoadingDots from "../Custom/loadingDots.jsx";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import RegisterModal from "../Modals/RegisterModal.jsx";

export default function Header1({ variant }) {
    const { setCurrentUser, setAuthToken, currentUser,  authToken, logout } = useContextElement();

    const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  //   customer / rider / supplier
  const [role, setRole] = useState("customer"); // default selected role

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

    const handleLogin = async (e) => {
        e.preventDefault(); // prevent form reload
        setLoading(true);

        try {
            let res;
            // logic based on selected role
            if (role === "customer") {
                res = await login({ email, password }, role);
            } else if (role === "supplier") {
                res = await login({ email, password }, role);
            } else if (role === "rider") {
                res = await login({ email, password }, role);
            }


            // Example: if your API returns token or user data
            if (res?.['success']) {
                // Store user object / token
                localStorage.setItem("user", JSON.stringify(res['data']['user']));
                localStorage.setItem("auth_token", res['data']['token']);

                // ✅ set global values
                setCurrentUser(res['data']['user']); // keep it as an object
                setAuthToken(res['data']['token']);

                toast.success("Login Successful!");

                // Reload home page
                window.location.href = "/";
            } else {
                throw new Error(res.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            toast.error(`Oops! ${err}`);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Logout Confirmation",
            text: `Are you sure you want to log out, ${currentUser?.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EB0029",
            cancelButtonColor: "#0a0a0a",
            iconColor: '#EB0029',
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // clear user session
                localStorage.removeItem("token");
                localStorage.removeItem("user");

                logout();

                toast.success("Logout Successful!");

            }
        });
    };

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left header-info">
              <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                <li><i className="bi bi-geo-alt-fill"></i>Abu Dhabi | UAE</li>
                <li><i className="bi bi-alarm"></i>9.00 am - 5.00 pm</li>
              </ul>
            </div>
            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links top-header-social-icon">
                Follow Us:
                  <ul>
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      

      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" to="/">
                <img src="/logo-white.png" alt="Logo" />
              </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>

            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">
                  <a onClick={() => setSearchToggle(!searchToggle)} className="search-trigger search-icon">
                      <i className="bi bi-search"></i>
                  </a>

                  {/* Trigger button/icon */}
                  { currentUser ?
                      <div
                          className="me-3 search-trigger search-icon text-hover-red"
                          style={{ cursor: "pointer" }}
                          onClick={handleLogout}
                      >
                          <LogOut className="mb-1 me-2 " />
                          <span>Welcome, {currentUser?.name}</span>
                      </div>
                      :
                      <a
                          onClick={() => setShowLogin(true)}
                          className="search-trigger search-icon"
                          style={{ cursor: "pointer" }}
                      >
                          <User className="mb-1" />
                      </a>
                  }

                  {/* Login Modal */}
                  {showLogin && (
                      <div
                          className="modal fade show"
                          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                          tabIndex="-1"
                          role="dialog"
                          onClick={() => setShowLogin(false)}
                      >
                          <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                              onClick={(e) => e.stopPropagation()}
                          >
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h2 className="mb-0 text-uppercase">Login</h2>
                                      <button
                                          type="button"
                                          className="btn-close bg-hover-red"
                                          onClick={() => setShowLogin(false)}
                                      ></button>
                                  </div>

                                  <div className="modal-body">
                                      {/* Role Selector */}
                                      <div className="mb-4 text-center">
                                          <div className="d-flex justify-content-center gap-3 flex-wrap role-box-group">
                                              <div
                                                  className={`role-box p-3 border rounded-3 ${role === "customer" ? "active" : ""}`}
                                                  onClick={() => setRole("customer")}
                                              >
                                                  <i className="bi bi-person fs-3 mb-2 text-danger"></i>
                                                  <h6 className="mb-0 text-uppercase fs-7">Customer</h6>
                                              </div>

                                              <div
                                                  className={`role-box p-3 border rounded-3 ${role === "supplier" ? "active" : ""}`}
                                                  onClick={() => setRole("supplier")}
                                              >
                                                  <i className="bi bi-shop fs-3 mb-2 text-danger"></i>
                                                  <h6 className="mb-0 text-uppercase fs-7">Supplier</h6>
                                              </div>
                                          </div>
                                      </div>

                                      {/* Login Form */}
                                      <form>
                                          <div className="container row">
                                              <div className="mb-3 col-12 col-lg">
                                                  <input
                                                      type="email"
                                                      className="form-control"
                                                      placeholder="Email"
                                                      onChange={(e) => setEmail(e.target.value)}
                                                      value={email}
                                                  />
                                              </div>
                                              <div className="mb-3 col-12 col-lg">
                                                  <input
                                                      type="password"
                                                      className="form-control"
                                                      placeholder="Password"
                                                      onChange={(e) => setPassword(e.target.value)}
                                                      value={password}
                                                  />
                                              </div>
                                          </div>
                                      </form>
                                  </div>

                                  { loading ?
                                      <LoadingDots/>
                                      :
                                      <div className="modal-footer flex-column">
                                          <span>Like to join as a delivery rider and earn? Join us — Download the app now!</span>

                                          <div className="mb-3 text-center">
                                              <span>Don’t have an account? </span>
                                              <a
                                                  href="#"
                                                  onClick={() => {
                                                      setShowLogin(false);
                                                      setShowRegister(true); // assuming you have a register modal
                                                  }}
                                                  className="text-danger fw-bold text-decoration-none"
                                                  style={{ cursor: "pointer" }}
                                              >
                                                  Register now
                                              </a>
                                          </div>

                                          <div className="d-flex w-100 justify-content-center gap-2 mb-2">
                                              <button
                                                  type="button"
                                                  className="btn btn-dark w-100"
                                                  onClick={() => setShowLogin(false)}
                                              >
                                                  Close
                                              </button>
                                              <button
                                                  type="button"
                                                  className="btn btn-danger btn-red w-100"
                                                  onClick={handleLogin}
                                              >
                                                  Login
                                              </button>
                                          </div>
                                      </div>

                                  }
                              </div>
                          </div>
                      </div>
                  )}

                <div className="main-button">
                    <Link to="/menu2" className="theme-btn" >ORDER NOW <i className="bi bi-arrow-right"></i></Link>
                </div>


                {/* REGISTER MODAL */}
                {showRegister && <RegisterModal setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className={`search-wrap ${searchToggle ? 'active' : ''}`} >
            <div className="search-inner">
                <i onClick={() => setSearchToggle(!searchToggle)} className="bi bi-x-lg search-close" id="search-close"></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search..." />
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="cs_site_header_spacing_130"></div>

    </div>

  );
}
