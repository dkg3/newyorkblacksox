import React from 'react';
import PropTypes from 'prop-types';

import Player from './Players/Players';

let season = 'Season';

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function pickSeason() {
  season = '2019 Roster';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i += 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById('dropdownArrow').classList.toggle('up');
        document.getElementById('dropdownArrow').classList.toggle('down');
      }
    }
  } else {
    document.getElementById('dropdownArrow').classList.toggle('up');
    document.getElementById('dropdownArrow').classList.toggle('down');
  }
};

const Players = ({ data }) => (
  <div className="players">
    <div className="title">
      <h3>Players/Coaches</h3>
      <button type="button" onClick={myFunction} className="dropbtn">{season} <i onClick={myFunction} id="dropdownArrow" className="arrow down" /></button>
      <div id="myDropdown" className="dropdown-content">
        <button type="button" id="2021Button" onClick={pickSeason} value="2021 Roster">2021 Roster</button>
        <button type="button" id="2019Button" onClick={pickSeason} value="2019 Roster">2019 Roster</button>
      </div>
    </div>
    {data.map((player) => (
      <Player
        data={player}
        key={player.name}
      />
    ))}
  </div>
);

Players.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    position: PropTypes.string,
    batsThrows: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
    dob: PropTypes.string,
  })),
};

Players.defaultProps = {
  data: [],
};

export default Players;
