import {Button, ArrowButton} from '../../../widgets/Button';
import styles from './style.module.css';

/**
 * 步驟控制
 * @param {number} totalSteps - 所有步驟 
 * @param {number} currentStep - 當前步驟(預設：1)
 * @param {function} onPrevStepClick - 處理點擊上一步
 * @param {function} onNextStepClick -  處理點擊下一步
 * @returns 
 */
function ProgressControl ({totalSteps, currentStep = 1, onPrevStepClick, onNextStepClick}) {
  return (
    <div className={styles['progress-control']}>
      <div className="row">
        <div className={(currentStep === 1) ? 'col-12' : 'col-6'}>
          {
            (currentStep !== 1) &&
            <ArrowButton
              className={`text-left ${styles['btn']}`}
              type="button"
              text="上一步"
              arrowDirection='left'
              onClick={onPrevStepClick}
            />
          }
        </div>
        <div className={`${(currentStep === 1) ? 'col-12' : 'col-6'} text-right`}>
          {
            (currentStep !== totalSteps) ? 
            <ArrowButton
              className={`is-active ${styles['btn']}`}
              type="button"
              text="下一步"
              arrowDirection='right'
              onClick={onNextStepClick}
            /> : 
            <Button
              className={`is-active ${styles['btn']}`}
              type="submit"
              text="確認下單"
            />
          }
        </div>
      </div>
    </div>
  );
}

export default ProgressControl;