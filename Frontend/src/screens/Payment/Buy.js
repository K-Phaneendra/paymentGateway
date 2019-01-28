import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';
import { API_POST, API_GET } from '../../actions/APIMethods';

const FieldGroup = ({
  id, label, help, ...props
}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

const getOrders = async () => {
  const url = 'http://localhost:9000/orders/fetchOrders';
  try {
    const result = await API_GET(url);
    // if (!result.error) {
    // }
    return result;
  } catch (error) {
    alert(error.message);
  }
  return null;
};
const createOrder = async order => {
  const url = 'http://localhost:9000/orders/buy';
  try {
    const result = await API_POST(url, order);
    // if (!result.error) {
    // }
    return result;
  } catch (error) {
    alert(error.message);
  }
  return null;
};

class Buy extends Component {
  state = {
    orders: [],
    customerId: 'cust123'
  };

  componentDidMount() {
    const fetchOrders = getOrders();
    fetchOrders.then(orders => this.setState({ orders: orders.orders }));
  }

  buy = () => {
    const order = {
      // ORDER_ID: this.state.orderId,
      CUST_ID: this.state.customerId,
      INDUSTRY_TYPE_ID: 'Retail',
      CHANNEL_ID: 'WEB',
      productName: this.state.productName,
      totalAmount: this.state.price,
      TXN_AMOUNT: this.state.price,
      MID: 'FiXgHb39123019186569',
      WEBSITE: 'WEBSTAGING',
      PAYTM_MERCHANT_KEY: 'hzG%U9%n&lqX%&S5'
      // CALLBACK_URL: 'http://localhost:9000/orders/testresponse'
    };

    const createdOrder = new Promise(resolve => resolve(createOrder(order)));
    createdOrder.then(order => {
      const { orders } = this.state;
      orders.push(order.data);
      this.setState({ orders });
    });
  };

  render() {
    console.log('state', this.state);
    return (
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Product Name"
          placeholder="Product Name"
          onChange={e => this.setState({ productName: e.target.value })}
        />
        <FieldGroup
          id="formControlsText"
          type="number"
          label="Price"
          placeholder="Price"
          onChange={e => this.setState({ price: e.target.value })}
        />
        <Button bsStyle="primary" onClick={this.buy}>

          Buy Now
        </Button>
      </form>
    );
  }
}

export default Buy;
