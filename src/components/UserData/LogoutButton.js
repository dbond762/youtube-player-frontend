import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <div className={`user-data ${this.props.className}`}>
        <span className="user-data__user">{this.props.user.login}</span>
        <input type="button" className="user-data__link" value="Logout" onClick={this.props.logout} />
      </div>
    );
  }
}

export default LogoutButton;
