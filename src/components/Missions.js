import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { fetchMissions, joinMissions, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const newMissions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const joinHandler = (id) => {
    dispatch(joinMissions(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMission(id));
  };

  useEffect(() => {
    if (fetchMissions.isLoading === false) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  const receivedMissions = newMissions.missions;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {receivedMissions.map((mission) => (
            <tr key={mission.missionId}>
              <td>{mission.missionName}</td>
              <td>{mission.description}</td>
              <td>
                <span>{mission.reserved ? <Button type="button">Active Member</Button> : <Button type="button" variant="secondary">Not a member</Button>}</span>
              </td>
              <td>
                <span>{mission.reserved ? <Button type="button" variant="outline-danger" onClick={() => { leaveMissionHandler(mission.missionId); }}>Leave Reservation</Button> : <Button variant="outline-dark" type="submit" onClick={() => joinHandler(mission.missionId)}>Join Mission</Button>}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Missions;
