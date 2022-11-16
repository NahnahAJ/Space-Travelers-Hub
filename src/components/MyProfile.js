import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <>
      <h4>My Rockets</h4>
      <Table bordered hover>
        <tbody>
          {rockets
            .filter((rocket) => rocket.reserved === true)
            .map((filteredRocket) => (
              <tr key={filteredRocket.id}>
                <td>{filteredRocket.rocketName}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
