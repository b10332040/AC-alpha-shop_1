import StepProgress from './step/StepProgress.js'
import Step from './step/Step.js'
import ProgressControl from './step/ProgressControl.js';

export function Checkout () {
  const steps = ['寄送地址', '運送方式', '付款資訊'];
  const currentStep = 1;
  
  return (
    <div className="container">
      <h1>結帳</h1>
      <main>
        <from>
          <StepProgress
            currentStep={currentStep}
            steps={steps}
          />
          <Step
            currentStep={currentStep}
            steps={steps}
          />
          <ProgressControl 
            currentStep={currentStep}
          />
        </from>
      </main>
    </div>
  );
}