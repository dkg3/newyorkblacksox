import React from 'react';

import Main from '../layouts/Main';

import Players from '../components/Roster/Roster';

import players2021 from '../data/roster/players_2021';
// import players2019 from '../data/roster/players_2019';

const rosterData = players2021;

const Roster = () => (
  <Main
    title="Roster"
    description="The Official Roster of the New York Blacksox"
  >
    <article className="post" id="roster">
      <header>
        <div className="title">
          <h2 data-testid="heading">Active Roster</h2>
        </div>
      </header>
      <Players data={rosterData} />
    </article>
  </Main>
);

export default Roster;
