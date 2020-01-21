import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    },
    price: 0
  };

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      console.log(param);
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = Number(param[1]);
      }
    }

    console.log("QUERY:", query);
    console.log("QueryEntries:", query.entries());

    this.setState({
      ingredients,
      totalPrice: price
    });
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contactdata");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contactdata"}
          render={props => (
            <ContactData
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
