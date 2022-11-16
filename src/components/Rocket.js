import React from 'react';
import { useDispatch } from 'react-redux';
import { propTypes } from 'prop-types';
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

Rocket.propTypes = {
  rocket: propTypes.objectOf({
    id: propTypes.number.isRequired,
    rocketName: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    flickrImages: propTypes.array.isRequired,
    reserved: propTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
