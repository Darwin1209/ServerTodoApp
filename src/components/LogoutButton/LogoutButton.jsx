import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser } from "../../actions/UserActions";

class LogoutButton extends React.Component {

  onLog = () => {
      this.props.logoutUser();
  }

  render() {
    return (
      <div className="header-user">
        <p>Привет, {this.props.user.name}</p>
        <button className="button" onClick={this.onLog}>Выйти</button>
      </div>
    )
  }
}

const mapStateToProps = store => {
    return {
      user: store.user,
    };
  };
  
  
const mapDispatchToProps = dispatch => bindActionCreators({
    logoutUser,
},dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutButton);