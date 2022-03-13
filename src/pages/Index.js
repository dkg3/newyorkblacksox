import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="The Official Website of the New York Blacksox"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About the team</Link></h2>
          <p>
            Founded in 2008
          </p>
          <p>
            2016 <a href="https://www.nycmetrobaseball.com/" target="_blank" rel="noreferrer" style={{ color: 'blue' }}> NYCMBL</a> Champions
          </p>
          <p>
            Manager Steven Ramos
          </p>
          <p>
            Captain Jeffrey Lagares
          </p>
        </div>
      </header>
      <p> Welcome to the home of the New York Blacksox. Click <Link to="/about" style={{ color: 'blue' }}>here</Link>,
        to learn more about the club {' '}
        and if you would like to contact us please click <Link to="/contact" style={{ color: 'blue' }}>here</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
