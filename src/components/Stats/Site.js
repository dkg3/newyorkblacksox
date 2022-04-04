import React, { useState, useCallback, useEffect } from 'react';

import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/mldangelo/personal-site',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div>
      <h3 style={{ position: 'relative', right: '10px' }}>Hitting Stats</h3>
      <table className="stats-table" style={{ width: '100%' }}>
        <tr>
          <th>PLAYER</th>
          <th>AVG</th>
          <th>OBP</th>
          <th>SLG</th>
          <th>HR</th>
          <th>RBI</th>
        </tr>
        {/* <tr>
          <td>David KG</td>
          <td>.321</td>
          <td>.374</td>
          <td>.425</td>
          <td>1</td>
          <td>21</td>
        </tr>
        <tr>
          <td>Steven R</td>
          <td>.279</td>
          <td>.337</td>
          <td>.408</td>
          <td>2</td>
          <td>17</td>
        </tr>
        <tr>
          <td>Jeffery L</td>
          <td>.403</td>
          <td>.455</td>
          <td>.602</td>
          <td>3</td>
          <td>35</td>
        </tr> */}
      </table>
      <h3 style={{ position: 'relative', right: '10px' }}>Pitching Stats</h3>
      <table className="stats-table">
        <tr>
          <th>PLAYER</th>
          <th>W</th>
          <th>L</th>
          <th>ERA</th>
          <th>SO</th>
          <th>WHIP</th>
        </tr>
        {/* <tr>
          <td>David KG</td>
          <td>3</td>
          <td>2</td>
          <td>3.76</td>
          <td>31</td>
          <td>1.23</td>
        </tr>
        <tr>
          <td>Steven R</td>
          <td>5</td>
          <td>1</td>
          <td>3.24</td>
          <td>56</td>
          <td>1.07</td>
        </tr>
        <tr>
          <td>Jeffery L</td>
          <td>5</td>
          <td>6</td>
          <td>4.21</td>
          <td>49</td>
          <td>1.51</td>
        </tr> */}
      </table>
    </div>
  );
};

export default Stats;
