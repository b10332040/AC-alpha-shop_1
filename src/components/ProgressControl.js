
import styles from '../modules/ProgressControl.module.css';

/**
 * 步驟控制
 * @param {array} 所有步驟 
 * @param {number} 當前步驟(預設：1) 
 * @returns 
 */
function ProgressControl ({steps, currentStep = 1}) {
  const className = (currentStep === 1) ? 'col-12' : 'col-6';
  let prevStepBtn = <></>;
  let nextStepBtn = <button className={`btn is-active ${styles['btn']}`} type="submit">確認下單</button>;

  if (currentStep > 1) {
    prevStepBtn = <button className={`btn text-left ${styles['btn']}`} type="button"><span className="btn__arrow is-left"></span>上一步</button>;
  }

  if (currentStep !== steps.length) {
    nextStepBtn = <button className={`btn is-active ${styles['btn']}`} type="button">
      下一步<span className="btn__arrow is-right"></span>
      </button>;
  }

  return (
    <div className={styles['progress-control']}>
      <div className="row">
        <div className={className}>
          {prevStepBtn}
        </div>
        <div className={`${className} text-right`}>
          {nextStepBtn}
        </div>
      </div>
    </div>
  );
}

export default ProgressControl;