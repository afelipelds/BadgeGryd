import React from 'react';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.twitter}`}
          {...console.log(this.props)}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found =(</h3>
          <p>We invite you to create your own Badge just clicking the button above.</p>
        </div>
      )
    }

    
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none" >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
