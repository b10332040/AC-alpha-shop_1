
import React, { useState } from 'react';
import { CartContext } from './Cart/CartContext';
import { StepContext, ShoppindDataContext, CanSubmitContext } from './CheckoutContext';
import { stepsData, initShoppingData } from './data';
import { shoppingListData } from './Cart/data';
import StepProgress from './StepProgress';
import ProgressControl from './ProgressControl';
import Cart from './Cart';

/**
 * 結帳
 * @returns 
 */
function Checkout () {
  const [currentStep, setCurrentStep] = useState(1);
  const [shoppingList, setShoppingList] = useState(shoppingListData);
  const [shoppingData, setShoppingData] = useState(initShoppingData);
  const totalSteps = 3;
  const currentStepData = stepsData[`step${currentStep.toString()}`];
  const Step = React.createElement(
    currentStepData.component
  );
  const stepProgressData = [];
  const canSubmit = (shoppingData.totalPrice > 0) ? true : false;

  // 給 StepProgress 的資料
  for (let i = 1; i <= totalSteps; i++) {
    stepProgressData.push({title: stepsData[`step${i.toString()}`].props.title});
  }
  
  // 處理點擊上或下一步
  function handleStepClick(step) {
    setCurrentStep((step === 'prev') ? currentStep - 1 : currentStep + 1);
  }
  // 處理增加或減少購物籃商品數量
  function handleCountClick(productId, action) {
    let totalPrice = 0;
    let newShoppingList = shoppingList.map(p => {
      if (p.id === productId) {
        return {...p, quantity: (action === 'inc') ? p.quantity + 1 : p.quantity - 1}
      } else {
        return p;
      }
    });

    for (let i = 0; i < newShoppingList.length; i++) {
      totalPrice += newShoppingList[i].price * newShoppingList[i].quantity;
    }

    setShoppingList(newShoppingList);
    setShoppingData({
      ...shoppingData,
      totalPrice: totalPrice
    })
  }
  // 處理表單送出
  function handleSubmit(e) {
    e.preventDefault();
    console.log(shoppingData);
  }

  return (
    <StepContext.Provider value={currentStep}>
      <CartContext.Provider value={shoppingList}>
        <CanSubmitContext.Provider value={canSubmit}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="container">
              <div className="row">
                <h1 className="col-12">結帳</h1>
                <main className="col-12 col-lg-7 p-y-3">
                  <StepProgress
                    data={stepProgressData}
                    currentStep={currentStep}
                  />
                  <h2 className='m-y-3'>{currentStepData.props.title}</h2>
                  {Step}
                  <div className='d-md-none m-y-3'>
                    <Cart
                      onCountClick={handleCountClick}
                    />
                  </div>
                  <ProgressControl
                    totalSteps={totalSteps}
                    currentStep={currentStep}
                    onStepClick={handleStepClick}
                  />
                </main>
                <aside className="d-none d-md-block col-12 col-lg-5 p-y-3">
                  <Cart
                    onCountClick={handleCountClick}
                  />
                </aside>
              </div>
            </div>
          </form>
        </CanSubmitContext.Provider>
      </CartContext.Provider>
    </StepContext.Provider>
  );
}

export default Checkout;