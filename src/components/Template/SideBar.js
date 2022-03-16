import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/soxlogo.png`} alt="Blacksox Team Logo" />
      </Link>
      <header>
        <h2>New York Blacksox</h2>
      </header>
    </section>

    <section className="blurb">
      <p>This is the official website of the New York Blacksox; a New York City adult
        league baseball club that plays throughout the Spring and Summer.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; New York Blacksox</p>
    </section>
  </section>
);

export default SideBar;
