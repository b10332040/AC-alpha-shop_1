function StepProgress({steps, currentStep = 1}) {
  const content = steps.map((step, index) => {
    let status = (currentStep === index + 1) ? 'is-focus' : (currentStep > index + 1) ? 'is-checked' : 'is-blur';

    return <li key={index} className={status}><span>{index + 1}</span>{step}</li>;
  });

  return (
    <ul className="c-stepProgress">
      {content}
    </ul>
  );
}

export default StepProgress;