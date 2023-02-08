/**
 * Checkout 結帳
 */
import StepProgress from './StepProgress.js'
import Step from './Step.js'
import ProgressControl from './ProgressControl.js';

function Checkout () {
  const steps = ['寄送地址', '運送方式', '付款資訊'];
  const currentStep = 3;
  
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">結帳</h1>
        <main className="col-12 col-md-6 col-lg-7">
          <form>
            <StepProgress
              steps={steps}
              currentStep={currentStep}
            />
            <Step
              steps={steps}
              currentStep={currentStep}
            />
            <ProgressControl 
              currentStep={currentStep}
            />
          </form>
        </main>
        <aside className="col-12 col-md-6 col-lg-5">
          <h3 className="d-none d-md-block">購物籃</h3>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;