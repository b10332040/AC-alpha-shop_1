function Step1() {
  return <p>Step1</p>;
}

function Step2() {
  return <p>Step2</p>;
}

function Step3() {
  return <p>Step3</p>;
}

function Step({currentStep = 1, steps}) {
  const currentStepTitle = steps[currentStep - 1];
  const stepContentComponent = (currentStep === 1) ? <Step1 /> : (currentStep === 2) ? <Step2 /> : <Step3 />;
  
  return (
    <div className="form__content">
      <h2>{currentStepTitle}</h2>
      {stepContentComponent}
    </div>
  );
}

export default Step;