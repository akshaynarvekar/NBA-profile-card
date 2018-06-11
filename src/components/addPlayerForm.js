import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPlayer } from '../actions/playerAction';

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

class PlayerForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      displayName: "",
      firstName: "",
      jerseyNo: "",
      lastName: "",
      playerId: "",
      position: "",
      teamAbbr: "",
      toProfile: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.props.addPlayer(player)
    this.setState({
      toProfile:true
    });
  }

  render() {
    const title="Add player";
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
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    );
  }
}

PlayerForm.propTypes = {
  addPlayer : PropTypes.func.isRequired
}

export default connect(null, { addPlayer })(PlayerForm);
