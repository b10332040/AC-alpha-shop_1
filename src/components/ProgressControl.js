
/**
 * 步驟控制
 * @param {array} 所有步驟 
 * @param {number} 當前步驟(預設：1) 
 * @returns 
 */
function ProgressControl ({steps, currentStep = 1}) {
  const prevStepBtn = (currentStep === 1) ? '' :  <button className="btn btn-step about-prev-step">上一步</button>;
  const nextStepBtn = (currentStep !== steps.length) ? <button className="btn btn-step about-next-step">下一步</button> : <button className="btn btn-primary">確認下單</button>;

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