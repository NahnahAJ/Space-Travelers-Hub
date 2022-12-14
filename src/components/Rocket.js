/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocketBooking } from '../redux/rockets/rocketsSlice';
import style from '../styles/Rocket.module.css';

function Rocket(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  return (
    <li className={style.rocket}>
      <img src={flickrImages[0]} alt="rockets" width={300} height={220} />
      <div>
        <h4>{rocketName}</h4>
        <p data-testid="testBadge">
          {reserved ? <span className={style.badge}>reserved</span> : null}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            className={style.cancelBtn}
            onClick={() => dispatch(cancelRocketBooking(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className={style.reserveBtn}
            onClick={() => dispatch(bookRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
}

export default Rocket;
