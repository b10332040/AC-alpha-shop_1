import { useState } from 'react';
import { CartContext } from './components/contents/Checkout/Cart/CartContext';
import { StepContext } from './components/contents/Checkout/CheckoutContext';
import Checkout from './components/contents/Checkout';
import shoppingListData from './data/shoppingList';
import './assets/styles/global.module.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shoppingList, setShoppingList] = useState(shoppingListData);

  // 結帳 - 處理點擊上或下一步
  function handleStepClick(step) {
    setCurrentStep((step === 'prev') ? currentStep - 1 : currentStep + 1);
  }
  // 結帳 - 處理增加或減少購物籃商品數量
  function handleCountClick(productId, action) {
    let newShoppingList = shoppingList.map(p => {
      if (p.id === productId) {
        return {...p, quantity: (action === 'inc') ? p.quantity + 1 : p.quantity - 1}
      } else {
        return p;
      }
    });
    setShoppingList(newShoppingList);
  }

  return (
    <div className="App">
      {/* <Header/> */}
      <div className="p-y-5">
        <StepContext.Provider value={currentStep}>
          <CartContext.Provider value={shoppingList}>
            <Checkout onStepClick={handleStepClick} onCountClick={handleCountClick}></Checkout>
          </CartContext.Provider>
        </StepContext.Provider>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
