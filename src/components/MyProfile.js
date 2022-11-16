// Render a list of all joined missions (use filter()) on the "My profile" page.
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

export default function MyProfile() {
  const res = (state) => {
    if (state.reserved === true) {
      return { ...state, reserved: true };
    }
    return state.reserved;
  };

  const currentState = useSelector((state) => state.mission.missions);
  const newArray = currentState.filter(res);

  return (
    <div>
      <h4>My Missions</h4>
      <Table bordered hover>
        <tbody>
          {
          newArray.map((res) => (
            <tr key={res.missionId}>
              <td>{res.missionName}</td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </div>
  );
}
