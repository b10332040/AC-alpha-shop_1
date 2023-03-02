import { shoppingListData } from './Cart/data';
import Address from './Address';
import Shipping from './Shipping';
import CreditCard from './CreditCard';

export const stepsData = {
  step1: {
    component: Address,
    props: {
      title: '寄送地址',
    }
  },
  step2: {
    component: Shipping,
    props: {
      title: '運送方式',
    }
  },
  step3: {
    component: CreditCard,
    props: {
      title: '付款資訊',
    }
  }
}


export const initShoppingData = {
  totalPrice: getTotalPrice(shoppingListData)
}

function getTotalPrice(data) {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].quantity;
  }
  return totalPrice;
}