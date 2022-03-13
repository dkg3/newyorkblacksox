import React from 'react';

import Main from '../layouts/Main';

import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Stats Page for the New York Blacksox"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">Stats</h2>
        </div>
      </header>
      <Site />
    </article>
  </Main>
);

export default Stats;
