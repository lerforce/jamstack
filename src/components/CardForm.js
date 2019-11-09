import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import queryString from "query-string";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import "../css/Pay.css";

class _Form extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.stripe.createToken({ name: "ugo" }).then(result => {
      if (typeof result.error !== "undefined") {
        this.setState({ error: result.error.message, success: "" });
      } else {
        this.stripeCreateCharge(result.token, 10 * 100);
      }
    });
  }

  stripeCreateCharge(token, amount) {
    const params = { token: token.id, amount: amount };
    const qParams = queryString.stringify(params);
    const url = ["/api", qParams].join("?");
    fetch(url)
      .then(response => response.json())
      .then(val => {
        if (val.ok) {
          return val.message;
        } else {
          throw val.message;
        }
      })
      .then(success => console.log("Success"), this.props.handleNext())
      .catch(error => console.log("Error", error));
  }

  render() {
    return (
      // <form onSubmit={(ev) => this.handleSubmit(ev)}>
      //   <Grid container style={{borderBottom: '1px solid white', width: '100%', margin: '1%'}}>
      //   <div className="form-group">
      //     <label>CardNumberElement</label>
      //       <CardNumberElement { ...this.createCssOptions() } classes={this.elementClasses}/>
      //   </div>
      //   </Grid>
      //   <Grid container style={{borderBottom: '1px solid white', width: '20%', margin: '3%'}}>
      //   <div className="form-group">
      //     <label>CardExpiryElement</label>
      //     <CardExpiryElement { ...this.createCssOptions() } classes={this.elementClasses}/>
      //   </div>
      //   </Grid>
      //       <Grid container style={{borderBottom: '1px solid white', width: '20%', margin: '3%'}}>
      //         <div className="form-group">
      //         <label>
      //           CVC
      //         </label>
      //       <CardCVCElement { ...this.createCssOptions() } classes={this.elementClasses}/>
      //         </div>
      //       </Grid>
      //   <Button
      //   variant="contained"
      //   color="secondary"
      //   style={{top: '10vh'}}
      //   type="submit"
      // >
      //   Validate
      // </Button>
      // </form>
    <Grid container>
        <h1>Payment</h1>
      <div className="cell example example2" id="example-2">
        <form onSubmit={ev => this.handleSubmit(ev)}>
          <div className="row">
            <div className="field">
              <div id="example2-card-number" className="input empty"></div>
              <CardNumberElement
                className="input empty"
                classes={this.elementClasses}
                style={{base: {fontSize: '18px', fontWeight: 600, color: "#fafafa"}}}
                />
              <label
                for="example2-card-number"
                data-tid="elements_examples.form.card_number_label"
              >
                Card number
              </label>
              <div className="baseline"></div>
            </div>
          </div>
          <div className="row">
            <div className="field half-width">
              <div id="example2-card-expiry" className="input empty"></div>
              <CardExpiryElement
                className="input empty"
                classes={this.elementClasses}
                style={{base: {fontSize: '18px', fontWeight: 600, color: "#fafafa"}}}
                />
              <label
                for="example2-card-expiry"
                data-tid="elements_examples.form.card_expiry_label"
                >
                Expiration
              </label>
              <div className="baseline"></div>
            </div>
            <div className="field half-width">
              <div id="example2-card-cvc" className="input empty"></div>
              <CardCVCElement
                className="input empty"
                classes={this.elementClasses}
                style={{base: {fontSize: '18px', fontWeight: 600, color: "#fafafa"}}}
              />
              <label
                for="example2-card-cvc"
                data-tid="elements_examples.form.card_cvc_label"
                >
                CVC
              </label>
              <div className="baseline"></div>
            </div>
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Validate
          </Button>
        </form>
      </div>
  </Grid>
    );
  }

  elementClasses = {
    focus: "focus",
    empty: "empty",
    invalid: "invalid"
  };
  createCssOptions() {
    return {
      classes: {
        base: "form-control"
      },
      style: {
        base: {
          borderBottom: "1px solid",
          fontWeight: 600,
          fontFamily: "Quicksand, Open Sans, Segoe UI, sans-serif",
          fontSize: "18px",
          fontSmoothing: "antialiased",
          width: "50%",
          color: "#fafafa",
          ":focus": {
            color: "#fafafa"
          },

          "::placeholder": {
            color: "#9BACC8"
          },

          ":focus::placeholder": {
            color: "#CFD7DF"
          }
        },
        invalid: {
          color: "#fff",
          ":focus": {
            color: "#FA755A"
          },
          "::placeholder": {
            color: "#FFCCA5"
          }
        }
      }
    };
  }
}

export default injectStripe(_Form);
