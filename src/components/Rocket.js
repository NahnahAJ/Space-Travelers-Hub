/* eslint-disable react/prop-types */
import React from 'react';

const picsum = 'https://picsum.photos/id/237/200/150';

function Rocket(props) {
  const { rocket } = props;
  const { rocketName, rocketDescription, reservation } = rocket;
  return (
    <li>
      <img src={picsum} alt="rockets" />
      <div>
        <h4>{rocketName}</h4>
        <p>{rocketDescription}</p>
        <button type="button">
          {reservation ? 'Reserve Rocket' : 'Cancel Reservation'}
        </button>
      </div>
    </li>
  );
}

export default Rocket;
