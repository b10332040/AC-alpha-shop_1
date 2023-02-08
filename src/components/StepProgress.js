import styles from '../modules/StepProgress.module.css';

function StepProgress({steps, currentStep = 1}) {
  const content = steps.map((step, index) => {
    let status = (currentStep === index + 1) ? 'is-focus' : (currentStep > index + 1) ? 'is-done' : 'is-undone';

    return (
      <li key={index} className={`${styles['step-progress__step']} ${styles[status]}`}>
        <span className={`${styles['step-progress__num']} d-inline-block`}>{index + 1}</span>
        <span className={`${styles['step-progress__text']} d-none d-md-inline-block`}>{step}</span>
      </li>
    );
  });

  return (
    <ul className={`${styles['step-progress']} m-y-2`}>
      {content}
    </ul>
  );
}

export default StepProgress;