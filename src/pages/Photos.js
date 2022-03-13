import React from 'react';

import Main from '../layouts/Main';

import PhotosVideos from '../components/Stats/PhotosVideos';

const Stats = () => (
  <Main
    title="Stats"
    description="Stats Page for the New York Blacksox"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">Team Photos/Videos</h2>
        </div>
      </header>
      <PhotosVideos />
    </article>
  </Main>
);

export default Stats;
