import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const newMissions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchMissions.isLoading === false) {
      dispatch(fetchMissions());
    }
  }, [fetchMissions.isLoading, dispatch]);

  const receivedMissions = newMissions.missions;
  console.log(receivedMissions);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {receivedMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <button type="button">Not a member</button>
              </td>
              <td>
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Missions;
