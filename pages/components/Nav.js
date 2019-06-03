import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import './Nav.scss';

function Nav() {
  const [user, setUser] = useState('');
  const [isBurgerActive, setBugerActive] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userOnQuery = urlParams.get('user');
    if (userOnQuery) {
      window.localStorage.setItem('user', userOnQuery);
      window.history.replaceState({}, '', '/');
      setUser(userOnQuery);
    } else if (window.localStorage.getItem('user')) {
      setUser(window.localStorage.getItem('user'));
    }

    ReactGA.initialize('UA-56506279-9');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  function signout() {
    window.localStorage.removeItem('user');
    setUser('');
  }

  return (
    <div>
      <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="https://t9t.io/favicon.ico" alt="favicon" width="28" height="28" />
            </a>
            <a
              href
              className={`navbar-burger ${isBurgerActive ? 'is-active' : ''}`}
              onClick={() => setBugerActive(!isBurgerActive)}
            >
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className={`navbar-menu ${isBurgerActive ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <a className="navbar-item chat-head-title" href="/"><strong>wewe</strong></a>
            </div>

            {
              user
                ? (
                  <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a href className="navbar-link">
                        {user}
                      </a>
                      <div className="navbar-dropdown is-right">
                        <a href className="navbar-item" onClick={() => signout()}>
                          Sign out
                        </a>
                      </div>
                    </div>
                  </div>
                )
                : ''
            }
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;
