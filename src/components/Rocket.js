/* eslint-disable react/prop-types */
import React from 'react';

function Rocket(props) {
  const { rocket } = props;
  const {
    rocket_name: rocketName,
    description,
    flickr_images: flickrImages,
  } = rocket;

  const reservation = true;
  return (
    <li>
      <img src={flickrImages[0]} alt="rockets" />
      <div>
        <h4>{rocketName}</h4>
        <p>{description}</p>
        <button type="button">
          {reservation ? 'Reserve Rocket' : 'Cancel Reservation'}
        </button>
      </div>
    </li>
  );
}

export default Rocket;
