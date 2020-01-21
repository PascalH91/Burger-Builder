import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/Buildcontrols";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  /*     constructor(props){
        super(props);
        this.state = {}
    } */

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    loading: false,
    error: false
  };

  componentDidMount = () => {
    axios
      .get("https://react-my-burger-b5427.firebaseio.com/ingredients.json")
      .then(res => {
        this.setState({
          ingredients: res.data
        });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      { totalPrice: newPrice, ingredients: updatedIngredients },
      () => this.updatePurchaseState()
    );
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState(
      { totalPrice: newPrice, ingredients: updatedIngredients },
      () => this.updatePurchaseState()
    );
  };

  updatePurchaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((acc, el) => acc + el, 0);

    this.setState({
      purchasable: sum > 0
    });
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    // this.setState({
    //   loading: true
    // });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Pascal Hanke",
    //     address: {
    //       street: "Teststreet 1",
    //       zipCode: "41351",
    //       country: "Germany"
    //     },
    //     email: "test@test.com"
    //   },
    //   deliveryMethod: "fastest"
    // };
    // /* alert("You continue!"); */
    // axios
    //   .post("/orders.json", order)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       loading: false,
    //       purchasing: false
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //       purchasing: false
    //     });
    //   });
const queryParams = [];
for (let i in this.state.ingredients) {
  queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]));
}
queryParams.push('price=' + this.state.totalPrice);
const queryString = queryParams.join('&')

    this.props.history.push({
      pathname: "/checkout",
      search: '?'+ queryString
    })
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={!this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </React.Fragment>
      );
    }

    let orderSummary = null;
    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {this.state.loading ? <Spinner /> : orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
