// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return (w >= 0 && h >= 0) ? w * h : null;
}

const perimeter = (w, h) => {
  return (w >= 0 && h >= 0) ? 2 * (w + h) : null;
}

const circleArea = r => {
  return (r >= 0) ? Math.PI * (r ** 2) : null;
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const cart = []

const clearCart = () => {
  cart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return cart;
}

const addItemToCart = (item) => {
  const index = cart.indexOf(item);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push(item);
  }
}

const getNumItemsInCart = () => {
  let num = 0;
  cart.forEach((item) => {
    num += item.quantity;
  })
  return num;
}

const removeItemFromCart = (item) => {
  const index = cart.indexOf(item);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
