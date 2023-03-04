import { useContext } from 'react';
import { StepContext, CanSubmitContext } from '../../../../context/CheckoutContext';
import {Button, ArrowButton} from '../../../widgets/Button';
import styles from './style.module.css';

/**
 * 步驟控制
 * @param {number} totalSteps - 所有步驟 
 * @param {function} onStepClick - 處理點擊上一步
 * @returns 
 */
function ProgressControl ({totalSteps, onStepClick}) {
  const currentStep = useContext(StepContext);
  const canSubmit = useContext(CanSubmitContext);
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
              onClick={() => {
                onStepClick('prev');
              }}
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
              onClick={() => {
                onStepClick('next');
              }}
            /> : 
            <Button
              className={`is-active ${styles['btn']}`}
              type="submit"
              text={(canSubmit) ? '確認下單' : '請購買商品 !'}
              disabled={!canSubmit}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default ProgressControl;