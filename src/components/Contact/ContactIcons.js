import React from 'react';
import { SocialIcon } from 'react-social-icons';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        Instagram&nbsp;&nbsp;
        <a href={s.link}>
          <SocialIcon
            url="https://instagram.com/blacksox_nyc"
            bgColor="black"
          />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
