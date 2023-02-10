/**
 * Checkout 結帳
 */
import StepProgress from './StepProgress.js'
import Step from './Step.js'
import ProgressControl from './ProgressControl.js';

/**
 * 前往結帳
 * @returns 
 */
function Checkout ({title='', currentStep}) {
  const steps = ['寄送地址', '運送方式', '付款資訊'];
  
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">{title}</h1>
        <main className="col-12 col-md-6 col-lg-7 p-y-3">
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
              steps={steps}
              currentStep={currentStep}
            />
          </form>
        </main>
        <aside className="col-12 col-md-6 col-lg-5 p-y-3">
          {/* <h3 className="d-none d-md-block">購物籃</h3> */}
        </aside>
      </div>
    </div>
  );
}

export default Checkout;