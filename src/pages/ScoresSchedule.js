import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/ScoresSchedule/Cell';
import data from '../data/scores_schedule';

const ScoresSchedule = () => (
  <Main
    title="Scores/Schedule"
    description="The Scores and Schedule Page of the New York Blacksox."
  >
    <article className="post" id="scores_schedule">
      <header>
        <div className="title">
          <h2 data-testid="heading">2022 Scores/Schedule</h2>
        </div>
      </header>
      {data.map((scoresSchedule) => (
        <Cell
          data={scoresSchedule}
          key={scoresSchedule.title}
        />
      ))}
    </article>
  </Main>
);

export default ScoresSchedule;
