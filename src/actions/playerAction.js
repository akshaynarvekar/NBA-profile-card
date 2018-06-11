import { FETCH_PLAYERS, FETCH_NEW_PLAYER, DELETE_PLAYER, EDIT_PLAYER } from './type';

export const fetchPlayers = () => dispatch => {
    fetch('http://localhost:3000/nba/')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_PLAYERS,
          payload: data
        })
      );
};

export const addPlayer = (playerData) => dispatch => {
  fetch('http://localhost:3000/nba/',{
    method: 'POST',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(playerData)
  })
  .then(res => res.json())
  .then(player =>
    dispatch({
      type: FETCH_NEW_PLAYER,
      payload: player
    })
  );
};

export const deletePlayer = (playerData) => dispatch => {
  fetch('http://localhost:3000/nba/'+playerData.id,{
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(player =>
    dispatch({
      type: DELETE_PLAYER,
      payload: playerData
    })
  );
};

export const editPlayer = (playerData) => dispatch => {
  fetch('http://localhost:3000/nba/'+playerData.id,{
    method: 'PUT',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(playerData)
  })
  .then(res => res.json())
  .then(player =>
    dispatch({
      type: EDIT_PLAYER,
      payload: player
    })
  );
};
