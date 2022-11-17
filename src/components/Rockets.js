import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';
import style from '../styles/Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(asyncGetRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <div>
      <ul className={style.rocketsContainer} data-testid="rocketList">
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} data-testid="rocket" />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
