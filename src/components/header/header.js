import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss";
import Logo from "../../common/images/logo";
import {FaInstagram, FaFacebookSquare} from 'react-icons/fa';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu () {
    this.setState({showMenu: !this.state.showMenu})
  }

  render () {
    return (
      <header>
        <nav className='container'>
          <div className='logo'>
            <Logo />
          </div>

          <div className='navigation-container'>
            <ul className={`nav-links ${this.state.showMenu ? 'nav-active' : ''}`}>
              <li>
                <Link to='/'>Servicios</Link>
              </li>
              <li>
                <Link to='/'>Testimonios</Link>
              </li>
              <li>
                <Link to='/'>Contactenos</Link>
              </li>
              <li>
                <Link to='/'>Blog</Link>
              </li>
            </ul>
          </div>

          <div class='social-container'>
            <a href='http://www.instagram.com' target='_blank'>
              <FaInstagram />
            </a>

            <a href='http://www.facebook.com' target='_blank'>
              <FaFacebookSquare />
            </a>
          </div>
  
          <div className='burger' role='button' onClick={this.toggleMenu.bind(this)} >
            <div class='line1'></div>
            <div class='line2'></div>
            <div class='line3'></div>
          </div>
  
        </nav>  
      </header>
    );
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

