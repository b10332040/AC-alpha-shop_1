import { Fragment } from 'react';
import styles from './style.module.css';

/**
 * 進度條
 * @param {array} data - 所有步驟資料
 * @param {number} currentStep - 當前步驟
 * @returns 
 */
function StepProgress({data, currentStep}) {
  const totalSteps = data.length;
  const content = data.map((step, index) => {
    let thisStep = index + 1;
    const stepStatus = (currentStep === thisStep) ? 'is-focus' : (currentStep > thisStep) ? 'is-done' : 'is-undone';

    return (
      <Fragment key={`step-progress-phase-${thisStep}`}>
        <li data-step={thisStep} className={`${styles['step-progress__step']} ${styles[stepStatus]}`}>
          <span className={`${styles['step-progress__num']} d-inline-block`}>
            {thisStep}
          </span>
          <span className={`${styles['step-progress__label']} d-none d-md-inline-block`}>{step.title}</span>
        </li>
        {
          (thisStep !== totalSteps) &&
          <li data-step={thisStep} className={`${styles['step-progress__line']} ${(thisStep <= currentStep) && styles['is-active']}`} aria-hidden="true"></li>
        }
      </Fragment>
    );
  });

  document.documentElement.style.setProperty('--progress-steps',totalSteps);

  return (
    <ul className={`${styles['step-progress']}`}>
      {content}
    </ul>
  );
}

export default StepProgress;