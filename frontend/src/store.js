import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  orderReducer,
  allOrdersReducer,
} from "./reducers/orderReducer";
const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  userDetails: userDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
