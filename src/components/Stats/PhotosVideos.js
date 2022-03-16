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
        <img src={`${PUBLIC_URL}/images/pic1.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic2.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic3.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic4.jpg`} style={{ width: '100%' }} alt="" />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video style={{ width: '100%', marginTop: '8px' }} controls>
          <source src={`${PUBLIC_URL}/videos/video1.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="column">
        <img src={`${PUBLIC_URL}/images/pic5.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic6.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic7.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic8.jpg`} style={{ width: '100%' }} alt="" />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video style={{ width: '100%', marginTop: '8px' }} controls>
          <source src={`${PUBLIC_URL}/videos/video2.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="column">
        <img src={`${PUBLIC_URL}/images/pic9.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic10.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic11.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic12.jpg`} style={{ width: '100%' }} alt="" />
      </div>
      <div className="column">
        <img src={`${PUBLIC_URL}/images/pic13.jpg`} style={{ width: '100%' }} alt="" />
        <img src={`${PUBLIC_URL}/images/pic14.jpg`} style={{ width: '100%' }} alt="" />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video style={{ width: '100%', marginTop: '8px' }} controls>
          <source src={`${PUBLIC_URL}/videos/video3.mp4`} type="video/mp4" />
        </video>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video style={{ width: '100%' }} controls>
          <source src={`${PUBLIC_URL}/videos/video4.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Stats;
