import React from 'react';
import Rocket from './Rocket';

const Rockets = () => {
  const SamplesArr = [
    {
      rocketName: 'Rocket 1',
      rocketDescription: 'This is a sample rocket',
      index: 1,
    },
    {
      rocketName: 'Rocket 2',
      rocketDescription: 'This is a sample rocket',
      index: 2,
    },
    {
      rocketName: 'Rocket 3',
      rocketDescription: 'This is a sample rocket',
      index: 3,
    },
    {
      rocketName: 'Rocket 4',
      rocketDescription: 'This is a sample rocket',
      index: 4,
    },
  ];
  return (
    <div>
      <ul>
        {SamplesArr.map((rocket) => (
          <Rocket key={rocket.index} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
