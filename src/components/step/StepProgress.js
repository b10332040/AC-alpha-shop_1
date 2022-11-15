function StepProgress({currentStep = 1, steps}) {
  const stepList = steps.map((step, index) => {
    const stepNum = index + 1;
    const stepStatus = (currentStep > stepNum) ? 'done' : (currentStep === stepNum) ? 'current' : 'not yet';

    return <li key={step} data-status={stepStatus}><span>{stepNum}</span>{step}</li>;
  });

  return (
    <ul>
      {stepList}
    </ul>
  );
}

export default StepProgress;