
/**
 * 步驟控制
 * @param {array} 所有步驟 
 * @param {number} 當前步驟(預設：1) 
 * @returns 
 */
function ProgressControl ({steps, currentStep = 1}) {
  const className = (currentStep === 1) ? 'col-12' : 'col-6';

  return (
    <div className="row">
      <div className={className}>
        {(currentStep > 1) && <button className="btn">上一步</button>}
      </div>
      <div className={className}>
        {(currentStep !== steps.length) ? <button className="btn">下一步</button> : <button className="btn">確認下單</button>}
      </div>
    </div>
  );
}

export default ProgressControl;