/* eslint-disable react/prop-types */
import React from 'react';

const picsum = 'https://picsum.photos/id/237/200/150';

function Rocket(props) {
  const { rocket } = props;
  const { rocket_name, description, flickr_images } = rocket;
  const reservation = true;
  return (
    <li>
      <img src={flickr_images[0]} alt="rockets" />
      <div>
        <h4>{rocket_name}</h4>
        <p>{description}</p>
        <button type="button">
          {reservation ? 'Reserve Rocket' : 'Cancel Reservation'}
        </button>
      </div>
    </li>
  );
}

export default Rocket;
