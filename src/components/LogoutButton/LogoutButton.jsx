import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class LogoutButton extends React.Component {
  render() {
    return (
      <div className="header-user">
        <p>Привет, {this.props.user}</p>
        <button className="button">Выйти</button>
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
    localUser,
},dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutButton);