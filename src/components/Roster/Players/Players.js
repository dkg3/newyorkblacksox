import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ data }) => (
  <article className="player-container">
    <header>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={data.headshot} alt="Player Headshot" className="default-player-headshot" />
              <h4 className="player">{data.name}</h4>
              <h4 className="player">#{data.number} Pos:{data.position}</h4>
              <h4 className="player">B/T: {data.batsThrows} Ht: {data.height} Wt: {data.weight}</h4>
              <h4 className="player">DOB: {data.dob}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  </article>
);

Player.propTypes = {
  data: PropTypes.shape({
    headshot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    batsThrows: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  }).isRequired,
};

export default Player;
