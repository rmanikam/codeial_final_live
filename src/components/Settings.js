import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      editMode: false
    };
  }
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="image-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">
            {/* note we will get user object from our reducer i.e from our 
                store */}
            {user.email}
          </div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={() => this.handleChange()}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">
              {/* note we will get user object from our reducer i.e from our 
                store */}
              {user.name}
            </div>
          )}
        </div>
      </div>
    );
  }
}
function myStateToProps({ auth }) {
  return {
    auth
  };
}
export default connect(myStateToProps)(Settings);
