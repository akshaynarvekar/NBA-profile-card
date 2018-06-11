import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/playerAction';
import { Link } from 'react-router-dom';
import Profile from './profile';

//Material-UI
import TitleBar from './common/titleBar';
import AddPlayerButton from './common/addPlayerButton';

class Tiles extends Component {

  componentWillMount(){
    this.props.fetchPlayers();
  }

  componentWillReceiveProps(prop){
    if (prop.newPlayer) {
      this.props.players.push(prop.newPlayer);
    }
  }

  render() {
    const tileItems = this.props.players.map(player =>
            <Profile key={player.id} profile={player} />
          ),
          title="Player Profiles";

    return(
      <div className="tile-container">
        <TitleBar title={title} />
        <Link to="/addPlayer">
          <AddPlayerButton />
        </Link>
        {tileItems}
      </div>
    );
  }
}

Tiles.propTypes = {
  fetchPlayers: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  newPlayer: PropTypes.object
}

const mapStateToProps = state => ({
  players: state.players.items,
  newPlayer: state.players.item
});

export default connect(mapStateToProps, { fetchPlayers })(Tiles);
