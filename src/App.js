import React, { useState } from 'react';
import Checkout from './components/contents/Checkout';
import './assets/styles/global.module.css';

function App() {
  // 結帳 - 步驟
  const [checkoutStep, setCheckoutStep] = useState(1);
  // 結帳 - 處理點擊上一步
  function handleCheckoutPrevStepClick() {
    setCheckoutStep(checkoutStep - 1);
  }
  // 結帳 - 處理點擊下一步
  function handleCheckoutNextStepClick() {
    setCheckoutStep(checkoutStep + 1);
  }

  const data = {
    component: Checkout,
    props: {
      currentStep: checkoutStep,
      onPrevStepClick: handleCheckoutPrevStepClick,
      onNextStepClick: handleCheckoutNextStepClick
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
