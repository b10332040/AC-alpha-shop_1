import { Fragment } from 'react';
import styles from '../modules/StepProgress.module.css';

/**
 * 進度條
 * @param {array} steps - 所有步驟標題
 * @param {number} currentStep - 當前步驟(預設：1) 
 * @returns 
 */
function StepProgress({steps, currentStep = 1}) {
  const content = steps.map((stepLabel, index) => {
    let step = index + 1;
    const phaseStatus = (currentStep === step) ? 'is-focus' : (currentStep > step) ? 'is-done' : 'is-undone';
    const line = (step !== steps.length) && <li data-step={step} className={`${styles['step-progress__line']} ${(step <= currentStep) && styles['is-active']}`}></li>;

    return (
      <Fragment key={`step-progress-phase-${step}`}>
        <li data-step={step} className={`${styles['step-progress__step']} ${styles[phaseStatus]}`}>
          <span className={`${styles['step-progress__num']} d-inline-block`}>
            {step}
          </span>
          <span className={`${styles['step-progress__label']} d-none d-md-inline-block`}>{stepLabel}</span>
        </li>
        {line}
      </Fragment>
    );
  });

  return (
    <ul className={`${styles['step-progress']}`}>
      {content}
    </ul>
  );
}

export default StepProgress;