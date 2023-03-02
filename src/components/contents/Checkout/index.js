
import React, { useState } from 'react';
import { CartContext } from './Cart/CartContext';
import { StepContext, ShoppingDataContext, CanSubmitContext } from './CheckoutContext';
import { initShoppingData } from './data';
import { shoppingListData } from './Cart/data';
import StepProgress from './StepProgress';
import ProgressControl from './ProgressControl';
import Cart from './Cart';
import Address from './Address';
import Shipping from './Shipping';
import CreditCard from './CreditCard';


/**
 * 結帳
 * @returns 
 */
function Checkout () {
  const [currentStep, setCurrentStep] = useState(1);
  const [shoppingList, setShoppingList] = useState(shoppingListData);
  const [shoppingData, setShoppingData] = useState(initShoppingData);
  const stepTitles = ['寄送地址', '運送方式', '付款資訊'];
  const totalSteps = stepTitles.length;
  const canSubmit = (shoppingData.totalPrice > 0) ? true : false;

  let CurrentStep = <Address></Address>
  switch (currentStep) {
    case 2:
      CurrentStep = <Shipping></Shipping>
      break;

    case 3:
      CurrentStep = <CreditCard onChange={handleChange}></CreditCard>
      break;
  
    default:
      CurrentStep = <Address></Address>
      break;
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
    
    const logContent = `
      購買總金額：${shoppingData.totalPrice}\n
      ---\n
      ${(shoppingData.creditCardName) ? '持卡人姓名：'+ shoppingData.creditCardName +'\n': ''}
      ${(shoppingData.creditCardNumber) ? '卡號：'+ shoppingData.creditCardNumber +'\n': ''}
      ${(shoppingData.creditCardEffectiveDate) ? '有效期限：'+ shoppingData.creditCardEffectiveDate +'\n': ''}
      ${(shoppingData.creditCardCVC) ? 'CVC / CCV：'+ shoppingData.creditCardCVC +'\n': ''}
    `;

    console.log(logContent);
  }

  // 處理輸入框的值改變
  function handleChange(e) {
    setShoppingData({
      ...shoppingData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <StepContext.Provider value={currentStep}>
      <ShoppingDataContext.Provider value={shoppingData}>
        <CanSubmitContext.Provider value={canSubmit}>
          <CartContext.Provider value={shoppingList}>
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
                      data={stepTitles}
                      currentStep={currentStep}
                    />
                    <h2 className='m-y-3'>{stepTitles[currentStep - 1]}</h2>
                    {CurrentStep}
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
          </CartContext.Provider>
        </CanSubmitContext.Provider>
      </ShoppingDataContext.Provider>
    </StepContext.Provider>
  );
}

export default Checkout;