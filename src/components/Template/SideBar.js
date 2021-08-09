import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/team.png`} alt="" />
      </Link>
      <header>
        <h2>New York Blacksox</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>This is the official homepage for the New York Blacksox; a New York City adult
        league baseball club that plays throughout the Spring and Summer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; New York Blacksox <Link to="/">newyorkblacksox.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
