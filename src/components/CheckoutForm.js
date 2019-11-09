import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Grid } from "@material-ui/core";
import { height } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: "20vh"
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: "20px"
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 400
  },
  input: {
    "&:after": {
      borderBottom: "2px solid #368077"
    },
    fontSize: "x-large"
  },
  inputLabel: {
    fontSize: "large",
    top: "-20%"
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "10%",
    marginLeft: "30%"
  }
}));

export default function InputAdornments(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lastName: "",
    firstName: "",
    address: "",
    country: "",
    postalCode: ""
  });
  // const [error, setErrors] = React.useState({
  //   first: 0,
  //   second: 0,
  //   third: 0,
  //   fourth: 0,
  //   fifth: 0
  // });
  const [lastnError, setlastnError] = React.useState(0);
  const [firstnError, setfirstnError] = React.useState(0);
  const [addressError, setaddressError] = React.useState(0);
  const [countryError, setcountryError] = React.useState(0);
  const [postalError, setpostalError] = React.useState(0);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    switch (prop) {
      case "lastName":
        setlastnError(0);
        break;
      case "firstName":
        setfirstnError(0);
        break;
      case "address":
        setaddressError(0);
        break;
      case "country":
        setcountryError(0);
        break;
      case "postalCode":
        setpostalError(0);
        break;
      default:
        break;
    }
  };

  const checkFirstName = () => {
    if (values.firstName === "") setfirstnError(1);
    else setfirstnError(0);
  };

  const checkAddress = () => {
    if (values.address === "") setaddressError(1);
    else setaddressError(0);
  };

  const checkCountry = () => {
    if (values.country === "") setcountryError(1);
    else setcountryError(0);
  };

  const checkPostalCode = () => {
    if (values.postalCode === "") setpostalError(1);
    else setpostalError(0);
  };

  const handleNextPage = () => {
    if (
      values.lastName != "" &&
      values.firstName != "" &&
      values.postalCode != "" &&
      values.address != "" &&
      values.country != ""
    )
      props.handleNext();
  };

  const isThereError = () => {
    if (
      lastnError === 1 ||
      firstnError === 1 ||
      addressError === 1 ||
      countryError === 1 ||
      postalError === 1
    )
      return true;
    return false;
  };

  const sendValidation = prop => event => {
    if (values.lastName === "") setlastnError(1);
    else setlastnError(0);
    checkFirstName();
    checkAddress();
    checkCountry();
    checkPostalCode();
    handleNextPage();
  };

  return (
    <Grid
      item
      style={{
        border: "1px solid grey",
        height: "750px",
        width: "600px",
        marginLeft: "-32%",
        paddingLeft: "20%"
      }}
    >
      <div className={classes.root}>
        <h1>Shipping information</h1>
        {lastnError === 1 ? (
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            error
          >
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <InputLabel
                  htmlFor="component-error"
                  className={clsx(classes.inputLabel)}
                >
                  Last name
                </InputLabel>
                <Input
                  type="text"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  className={clsx(classes.input)}
                />
                <FormHelperText id="component-error-text">
                  This field is required
                </FormHelperText>
              </Grid>
            </div>
          </FormControl>
        ) : (
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <InputLabel
                  htmlFor="component-error"
                  className={clsx(classes.inputLabel)}
                >
                  Last name
                </InputLabel>
                <Input
                  type="text"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  className={clsx(classes.input)}
                />
              </Grid>
            </div>
          </FormControl>
        )}
        {firstnError === 1 ? (
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            error
          >
            <InputLabel
              htmlFor="firstName"
              className={clsx(classes.inputLabel)}
            >
              First name
            </InputLabel>
            <Input
              type="text"
              value={values.firstName}
              onChange={handleChange("firstName")}
              className={clsx(classes.input)}
            />
            <FormHelperText id="component-error-text">
              This field is required
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel
              htmlFor="firstName"
              className={clsx(classes.inputLabel)}
            >
              First name
            </InputLabel>
            <Input
              type="text"
              value={values.firstName}
              onChange={handleChange("firstName")}
              className={clsx(classes.input)}
            />
          </FormControl>
        )}
        {addressError === 1 ? (
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            error
          >
            <InputLabel htmlFor="address" className={clsx(classes.inputLabel)}>
              Address
            </InputLabel>
            <Input
              type="text"
              value={values.address}
              onChange={handleChange("address")}
              className={clsx(classes.input)}
            />
            <FormHelperText id="component-error-text">
              This field is required
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="address" className={clsx(classes.inputLabel)}>
              Address
            </InputLabel>
            <Input
              type="text"
              value={values.address}
              onChange={handleChange("address")}
              className={clsx(classes.input)}
            />
          </FormControl>
        )}
        {countryError === 1 ? (
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            error
          >
            <InputLabel htmlFor="Country" className={clsx(classes.inputLabel)}>
              Country
            </InputLabel>
            <Input
              type="text"
              value={values.country}
              onChange={handleChange("country")}
              className={clsx(classes.input)}
            />
            <FormHelperText id="component-error-text">
              This field is required
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="Country" className={clsx(classes.inputLabel)}>
              Country
            </InputLabel>
            <Input
              type="text"
              value={values.country}
              onChange={handleChange("country")}
              className={clsx(classes.input)}
            />
          </FormControl>
        )}
        {postalError === 1 ? (
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            error
          >
            <InputLabel
              htmlFor="postal-code"
              className={clsx(classes.inputLabel)}
            >
              PostalCode
            </InputLabel>
            <Input
              type="text"
              value={values.postalCode}
              onChange={handleChange("postalCode")}
              className={clsx(classes.input)}
            />
            <FormHelperText id="component-error-text">
              This field is required
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel
              htmlFor="postal-code"
              className={clsx(classes.inputLabel)}
            >
              PostalCode
            </InputLabel>
            <Input
              type="text"
              value={values.postalCode}
              onChange={handleChange("postalCode")}
              className={clsx(classes.input)}
            />
          </FormControl>
        )}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={sendValidation(1)}
          disabled={isThereError()}
        >
          Validate
        </Button>
      </div>
    </Grid>
  );
}
