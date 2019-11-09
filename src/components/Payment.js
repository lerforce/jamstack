import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CardForm from './CardForm';
import pjson from '../../package.json';

class Payment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <StripeProvider apiKey="pk_test_ntGKsL4xhkXodx6ZDddQG63n00V8fHOiIk">
            <div className="Checkout">
              <Elements>
                <CardForm handleNext={this.props.handleNext}/>
              </Elements>
            </div>
          </StripeProvider>
    );
  }
}

export default Payment;
