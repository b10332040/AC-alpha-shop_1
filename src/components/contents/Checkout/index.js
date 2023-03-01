
import React, {useContext} from 'react';
import { StepContext } from './CheckoutContext';
import StepProgress from './StepProgress';
import ProgressControl from './ProgressControl';
import Cart from './Cart';
import data from './data.js';

/**
 * 結帳
 * @param {function} onStepClick - 處理點擊上或下一步
 * @param {function} onCountClick - 處理增加或減少購物籃商品數量
 * @returns 
 */
function Checkout ({onStepClick, onCountClick}) {
  const totalSteps = 3;
  const currentStep = useContext(StepContext);

  const currentStepData = data[`step${currentStep.toString()}`];
  const Step = React.createElement(
    currentStepData.component
  );

  const stepProgressData = [];
  for (let i = 1; i <= totalSteps; i++) {
    stepProgressData.push({title: data[`step${i.toString()}`].props.title});
  }

  return (
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
              onCountClick={onCountClick}
            />
          </div>
          <ProgressControl
            totalSteps={totalSteps}
            currentStep={currentStep}
            onStepClick={onStepClick}
          />
        </main>
        <aside className="d-none d-md-block col-12 col-lg-5 p-y-3">
          <Cart
            onCountClick={onCountClick}
          />
        </aside>
      </div>
    </div>
  );
}

export default Checkout;