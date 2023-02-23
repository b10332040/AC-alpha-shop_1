import React, { useState } from 'react';
import Checkout from './components/contents/Checkout';
import shoppingListData from './data/shoppingList';
import './assets/styles/global.module.css';

function App() {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [shoppingList, setShoppingList] = useState(shoppingListData);

  // 結帳 - 處理點擊上一步
  function handleCheckoutPrevStepClick() {
    setCheckoutStep(checkoutStep - 1);
  }
  // 結帳 - 處理點擊下一步
  function handleCheckoutNextStepClick() {
    setCheckoutStep(checkoutStep + 1);
  }
  // 結帳 -處理增加購物籃商品數量
  function handleCartIncreaseClick(productId) {
    let newShoppingList = shoppingList.map(p => {
      if (p.id === productId) {
        return {...p, quantity: p.quantity + 1}
      } else {
        return p;
      }
    });

    setShoppingList(newShoppingList);
  }
  // 結帳 -處理減少購物籃商品數量
  function handleCartDecreaseClick(productId) {
    let newShoppingList = shoppingList.map(p => {
      if (p.id === productId) {
        return {...p, quantity: p.quantity - 1}
      } else {
        return p;
      }
    });

    setShoppingList(newShoppingList);
  }

  const data = {
    component: Checkout,
    props: {
      currentStep: checkoutStep,
      shoppingList: shoppingList,
      onPrevStepClick: handleCheckoutPrevStepClick,
      onNextStepClick: handleCheckoutNextStepClick,
      onIncreaseClick: handleCartIncreaseClick,
      onDecreaseClick: handleCartDecreaseClick
    }
  }
  const Content = React.createElement(
    data.component,
    data.props
  );

  return (
    <div className="App">
      {/* <Header/> */}
      <div className="p-y-5">
        {Content}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
