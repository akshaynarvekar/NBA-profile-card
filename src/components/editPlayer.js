import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deletePlayer, editPlayer } from '../actions/playerAction';

//Materil- UI
import TitleBar from './common/titleBar';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const playerPos = [
  {
    value: 'F-C',
    label: 'Forward-Center',
  },
  {
    value: 'F-G',
    label: 'Forward-Guard',
  },
  {
    value: 'F',
    label: 'Forward',
  },
  {
    value: 'G',
    label: 'Guard',
  }
],
teamList = [
  {
    value: 'WAS',
    label: 'Washington Wizards',
  },
  {
    value: 'MIL',
    label: 'Milwaukee Bucks',
  },
  {
    value: 'DET',
    label: 'Detroit Pistons',
  },
  {
    value: 'NYK',
    label: 'New York Knicks',
  },
  {
    value: 'NOP',
    label: 'New Orleans Pelicans',
  },
  {
    value: 'POR',
    label: 'Portland Trail Blazers',
  },
  {
    value: 'GSW',
    label: 'Golden State Warriors',
  },
  {
    value: 'CLE',
    label: 'Cleveland Cavaliers',
  },
  {
    value: 'OKC',
    label: 'Oklahoma City Thunder',
  },
  {
    value: 'HOU',
    label: 'Houston Rockets',
  }
];

class EditPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.location.state.player.id,
      displayName: this.props.location.state.player.displayName,
      firstName: this.props.location.state.player.firstName,
      jerseyNo: this.props.location.state.player.jerseyNo,
      lastName: this.props.location.state.player.lastName,
      playerId: this.props.location.state.player.playerId,
      position: this.props.location.state.player.position,
      teamAbbr: this.props.location.state.player.teamAbbr,
      toProfile: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startDeletePlayer = this.startDeletePlayer.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const player = {
      id:this.state.id,
      displayName: this.state.firstName+" "+this.state.lastName,
      firstName: this.state.firstName,
      jerseyNo: this.state.jerseyNo,
      lastName: this.state.lastName,
      playerId: this.state.playerId,
      position: this.state.position,
      teamAbbr: this.state.teamAbbr
    };

    this.props.editPlayer(player);
    this.setState({
      toProfile:true
    });
  }

  startDeletePlayer(){
    this.props.deletePlayer(this.props.location.state.player);
    this.setState({
      toProfile:true
    });
  }

  render() {
    const title="Edit Player";
    if(this.state.toProfile){
      return <Redirect to="/" />;
    }
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <TitleBar title={title}/>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          required
          id="jerseyNo"
          name="jerseyNo"
          label="Jersey Number"
          value={this.state.jerseyNo}
          onChange={this.handleChange}
          margin="normal"
          type="number"
        />
        <br />
        <TextField
          required
          id="position"
          select
          label="Position"
          name="position"
          value={this.state.position}
          onChange={this.handleChange}
          helperText="Enter the playing position"
          margin="normal"
        >
          {playerPos.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          id="teamAbbr"
          select
          label="Team name"
          name="teamAbbr"
          value={this.state.teamAbbr}
          onChange={this.handleChange}
          helperText="Enter the team name"
          margin="normal"
        >
          {teamList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <input type="submit" value="Save" className="submit-button" />
        <button onClick={this.startDeletePlayer} className="delete-button">Delete</button>
      </form>
    );
  }
}

EditPlayer.propTypes = {
  deletePlayer : PropTypes.func.isRequired
}

export default connect(null, { deletePlayer, editPlayer })(EditPlayer);
