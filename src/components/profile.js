import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const IMG_URL = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/",
      ERR_URL = "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/default_nba_headshot_v2.png",
      TEAM_ABBR_URL = "http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/";

class Profile extends Component {

  render() {
    return(
      <div className="player-tile">
        <img src={IMG_URL+this.props.profile.playerId+".png"} onError={(e)=>{e.target.src=ERR_URL}} alt={this.props.profile.displayName} className="player-image"/>
        <h1>
          {this.props.profile.firstName}
          <br />
          {this.props.profile.lastName}
        </h1>
        <img src={TEAM_ABBR_URL+this.props.profile.teamAbbr+".svg"} alt={this.props.profile.teamAbbr} className="team-icon"/>
        <p>{"#"+this.props.profile.jerseyNo+" | "+this.props.profile.position+" | "+this.props.profile.teamAbbr}</p>
        <Link
          to={{
            pathname: '/editPlayer',
            state: { player : this.props.profile }
          }}>
            <p><button className="edit-button">Edit</button></p>
          </Link>
      </div>
    );
  }
}

export default Profile;
