import React from 'react';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Steven Ramos via email @ blacksoxnyc@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">Contact</h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          If you are interested in joining the team or have any questions,
          please get in touch. You can email me at:
        </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
