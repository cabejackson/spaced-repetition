import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

export default class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span>
          Welcome {this.context.user.name}
        </span>
        <nav className="navBar__ul">
          <ul>
            <li>
              <Link
                onClick={this.handleLogoutClick}
                to='/login'>
                Logout
          </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className="navBar__ul">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Sign up</Link>
          </li>
        </ul>
      </nav>
    )
  }

  render() {
    return (
      <header className="header">
        <h1>
          <Link to='/' className="spacedRep___Link">
            Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

