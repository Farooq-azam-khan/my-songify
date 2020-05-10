import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Profile = (props) => {
  if (!props.user.logged_in) {
    return <div>You must login to view your profile</div>;
  }
  const user = props.user.user_data;
  return (
    <div>
      welcome {user.firstname} {user.lastname}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, {})(Profile);
