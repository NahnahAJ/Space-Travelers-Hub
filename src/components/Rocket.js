/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { bookRocket, cancelRocketBooking } from '../redux/rockets/rocketsSlice';

function Rocket(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  return (
    <li>
      <img src={flickrImages[0]} alt="rockets" />
      <div>
        <h4>{rocketName}</h4>
        <p>
          {reserved ? <span>reserved</span> : <span>Not reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            onClick={() => dispatch(cancelRocketBooking(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button type="button" onClick={() => dispatch(bookRocket(id))}>
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
}

// Rocket.propTypes = {
//   rocket: {
//     id: PropTypes.number.isRequired,
//     rocketName: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     flickrImages: PropTypes.array.isRequired,
//     reserved: PropTypes.bool.isRequired,
//   }.isRequired,
// };

export default Rocket;
