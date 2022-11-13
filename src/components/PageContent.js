import StepProgress from './step/StepProgress.js'
import Step from './step/Step.js'
import ProgressControl from './step/ProgressControl.js';

export function Checkout () {
  return (
    <div className="container">
      <h1>結帳</h1>
      <main>
        <StepProgress></StepProgress>
        <Step></Step>
        <ProgressControl></ProgressControl>
      </main>
    </div>
  );
}