import { shoppingListData } from './Cart/data';

export const initShoppingData = {
  totalPrice: getTotalPrice(shoppingListData),
}

function getTotalPrice(data) {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].quantity;
  }
  return totalPrice;
}