import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const FinishPayment = ({ resetStore }) => (
  <div>
    <Button
      color={"secondary"}
      variant="contained"
      size="large"
      component="a"
      to="/shop"
      onClick={resetStore}
      style={{
          marginLeft: "30%"
      }}
      >
      Go back to Shop
    </Button>
  </div>
)

FinishPayment.propTypes = {
  resetStore: PropTypes.func.isRequired
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

const mapDispatchToProps = dispatch => {
  return {
    resetStore: () => dispatch({ type: 'RESET'})
  }
}

const ConnectedFinishPayment = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishPayment)

export default (props) => {
    function shopButtonClick() {
        navigate("/shop", {
        })
      }
    return (
    <div>
      <h1>Payment confirmed</h1>
      <Grid
        container
        style={{
          border: "1px solid grey",
          height: "250px",
          width: "600px",
          marginLeft: "-32%",
          padding: "10%"
        }}
      >
        <h3>
          Your purchases will be delivered between 7 and 8 days. Thank you for
          your fidelity, we hope you will enjoy recieving them.
        </h3>
      {/* <Button
        color={"secondary"}
        variant="contained"
        size="large"
        component="a"
        to="/shop"
        onClick={shopButtonClick}
        style={{
            marginLeft: "30%"
        }}
        >
        Go back to Shop
      </Button> */}
      <ConnectedFinishPayment/>
    </Grid>
    </div>
  );
};
