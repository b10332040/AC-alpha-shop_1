
import React from 'react';

import StepProgress from './StepProgress';
import Address from './Address';
import Shipping from './Shipping';
import CreditCard from './CreditCard';
import ProgressControl from './ProgressControl';
import Cart from './Cart';

/**
 * 結帳
 * @param {number} currentStep - 當前步驟 (預設：1)
 * @returns 
 */
function Checkout ({currentStep = 1}) {
  const totalSteps = 3;
  const data = {
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

  currentStep = (currentStep > 0 && currentStep <= totalSteps) ? currentStep : 1;

  const currentStepData = data[`step${currentStep.toString()}`];
  const stepProgressData = [];
  const Step = React.createElement(
    currentStepData.component
  );

  for (let i = 1; i <= totalSteps; i++) {
    stepProgressData.push({title: data[`step${i.toString()}`].props.title});
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">結帳</h1>
        <main className="col-12 col-md-6 col-lg-7 p-y-3">
          <StepProgress
            data={stepProgressData}
            currentStep={currentStep}
          />
          <h2 className='m-y-3'>{currentStepData.props.title}</h2>
          {Step}
          <div className='d-md-none m-y-3'>
            <Cart />
          </div>
          <ProgressControl
            totalSteps={totalSteps}
            currentStep={currentStep}
          />
        </main>
        <aside className="d-none d-md-block col-12 col-md-6 col-lg-5 p-y-3">
          <Cart />
        </aside>
      </div>
    </div>
  );
}

export default Checkout;