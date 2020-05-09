import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import { connect } from "react-redux";

import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import getFormData from "../getFormData";
// TODO: hide and show passwords
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// TODO: show required fields
const useStyles = makeStyles((theme) => ({
  root: {
    height: "91vh",
  },
  formGrid: {
    maxWidth: "600px",
    padding: "1rem",
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const [firstname, setFirstName] = useState("");
  const [fn_errors, setFNErrors] = useState([]);
  const [show_fn_errors, setShow_fn_erros] = useState(false);

  const [middlename, setMiddleName] = useState("");

  const [lastname, setLastName] = useState("");

  const [ln_errors, setLNErrors] = useState([]);
  const [show_ln_errors, setShow_ln_erros] = useState(false);

  const [email, setEmail] = useState("");

  const [email_errors, setEmailErrors] = useState([]);
  const [show_email_errors, setShow_email_erros] = useState(false);

  const [confirm_email, setConfirmEmail] = useState("");

  const [ce_errors, setCEErrors] = useState([]);
  const [show_ce_errors, setShow_ce_erros] = useState(false);

  const [password, setPassword] = useState("");

  const [pwd_errors, setPwdErrors] = useState([]);
  const [show_pwd_errors, setShow_pwd_erros] = useState(false);

  const [confirm_password, setConfirmPassword] = useState("");

  const [cpwd_errors, setCPWDErrors] = useState([]);
  const [show_cpwd_errors, setShowc_pwd_erros] = useState(false);

  const [render_feedback, setRenderFeedback] = useState(false);
  const [feedback_message, setFeedbackMessage] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleMiddleNameChange = (e) => setMiddleName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChnage = (e) => setEmail(e.target.value);
  const handleConfirmEmailChange = (e) => setConfirmEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setConfirmPassword(e.target.value);

  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      middlename,
      lastname,
      email,
      confirm_email,
      password,
      confirm_password,
    };
    fetch("/users/register", { method: "POST", body: getFormData(data) })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.success) {
          setRenderFeedback(true);
          setFeedbackMessage(data.message);
          if (data.errors) {
            if (data.errors.firstname) {
              setShow_fn_erros(true);
              setFNErrors(data.errors.firstname);
            }
            if (data.errors.lastname) {
              setShow_ln_erros(true);
              setLNErrors(data.errors.lastname);
            }
            if (data.errors.email) {
              setShow_email_erros(true);
              setEmailErrors(data.errors.email);
            }
            if (data.errors.confirm_email) {
              setShow_ce_erros(true);
              setCEErrors(data.errors.confirm_email);
            }

            if (data.errors.password) {
              setShow_pwd_erros(true);
              setPwdErrors(data.errors.password);
            }

            if (data.errors.confirm_password) {
              setShowc_pwd_erros(true);
              setCPWDErrors(data.errors.confirm_password);
            }
          }
        } else {
          history.push("/");
        }
      });
  };

  if (props.user.logged_in) {
    return <Typography variant="h2">You are logged in</Typography>;
  }

  return (
    <Grid
      container
      className={classes.root}
      // spacing={}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h2">Register</Typography>
        {render_feedback ? (
          <Alert severity="error">{feedback_message}</Alert>
        ) : null}
      </Grid>

      <form onSubmit={handleSubmitForm}>
        <Grid
          item
          container
          className={classes.formGrid}
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={2}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
            spacing={1}
          >
            <Grid item xs={12} md={4}>
              <TextField
                autoFocus
                required
                error={show_fn_errors}
                helperText={show_fn_errors ? fn_errors.join(", ") : null}
                onChange={handleFirstNameChange}
                defaultValue={firstname}
                fullWidth
                type="text"
                id="firstname-input"
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                onChange={handleMiddleNameChange}
                value={middlename}
                type="text"
                id="middlename-input"
                label="Middle Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                error={show_ln_errors}
                helperText={show_ln_errors ? ln_errors.join(", ") : null}
                onChange={handleLastNameChange}
                value={lastname}
                type="text"
                id="lastname-input"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                error={show_email_errors}
                helperText={show_email_errors ? email_errors.join(", ") : null}
                onChange={handleEmailChnage}
                value={email}
                type="email"
                id="email-input"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                error={show_ce_errors}
                helperText={show_ce_errors ? ce_errors.join(", ") : null}
                onChange={handleConfirmEmailChange}
                value={confirm_email}
                type="email"
                id="confirm-email-input"
                label="Confirm Email"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                error={show_pwd_errors}
                helperText={show_pwd_errors ? pwd_errors.join(", ") : null}
                onChange={handlePasswordChange}
                value={password}
                type="password"
                id="password-input"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                error={show_cpwd_errors}
                helperText={show_cpwd_errors ? cpwd_errors.join(", ") : null}
                onChange={handlePasswordConfirmChange}
                value={confirm_password}
                type="password"
                id="confirm-password-input"
                label="Confirm Password"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

Register.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStatesToProps = ({ user }) => ({ user });
export default connect(mapStatesToProps, {})(Register);
