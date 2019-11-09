import { createStore as reduxCreateStore } from "redux"
import { navigate } from 'gatsby'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
      state.cart.push(action.data)
      state.cart = state.cart
      state.count = state.cart.length
      return Object.assign({}, state, {
        cart: state.cart,
        count: state.count
      })
    }
    if (action.type === 'REMOVE') {
      state.count = state.cart.length - 1
      state.cart.forEach(function (element, index, object) {    
        if (element.title === action.data.title) {
          object.splice(index, 1)
        }
      });
    return Object.assign({}, state, {
      cart: state.cart,
      count: state.count
    })
  }
  if (action.type === 'RESET') {
    state.count = 0
    state.cart = []
    navigate("/shop")
    return Object.assign({}, state, {
      cart: state.cart,
      count: state.count
    })
  }
  return state
}

const initialState = {
    count: 0,
    cart: [],
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore