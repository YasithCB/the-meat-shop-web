import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about2">About</Link>
      </li>
      <li>
        <Link to="/suppliers">Suppliers</Link>
      </li>
      <li>
        <Link to="/menu2">Shop</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

        {/*<li className="menu-item-has-children">*/}
        {/*    <Link to="#">Pages</Link>*/}
        {/*    <DropDown>*/}
        {/*        <ul>*/}
        {/*            <li>*/}
        {/*                <Link to="/about" onClick={() => setMobileToggle(false)}>*/}
        {/*                    About Us 1*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/about2" onClick={() => setMobileToggle(false)}>*/}
        {/*                    About Us 2*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/chef" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Chef*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/chef/chef-details" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Chef Details 1*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/chef/chef-details2" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Chef Details 2*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/gallery" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Gallery*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/service" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Services*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Service Details*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/testimonial" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Testimonials*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/reservation" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Reservation*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <Link to="/faq" onClick={() => setMobileToggle(false)}>*/}
        {/*                    Faq*/}
        {/*                </Link>*/}
        {/*            </li>*/}

        {/*        </ul>*/}
        {/*    </DropDown>*/}
        {/*</li>*/}

    </ul>
  );
}
