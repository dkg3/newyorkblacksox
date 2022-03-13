import React, { useState, useCallback, useEffect } from 'react';

import initialData from '../../data/stats/site';

const { PUBLIC_URL } = process.env;

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
    <div className="row">
      <div className="column">
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
      </div>
      <div className="column">
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
      </div>
      <div className="column">
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
      </div>
      <div className="column">
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/team.png`} style={{ width: '100%' }} alt="" />
      </div>
    </div>
  );
};

export default Stats;
