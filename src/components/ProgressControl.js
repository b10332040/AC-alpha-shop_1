
function ProgressControl ({currentStep = 1 }) {
  const prevStepBtn = (currentStep === 1) ? '' :  <button className="btn btn-step about-prev-step">上一步</button>;
  const nextStepBtn = (currentStep !== 3) ? <button className="btn btn-step about-next-step">下一步</button> : <button className="btn btn-primary">確認下單</button>;

  return (
    <div className="c-progressControl">
      <div className="l-row">
        <div className="l-col-6">{prevStepBtn}</div>
        <div className="l-col-6">{nextStepBtn}</div>
      </div>
    </div>
  );
}

export default ProgressControl;