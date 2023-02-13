/**
 * 欄位 - 條狀 check box
 * @param {string} type - 單選或複選
 * @param {string} name - 名稱
 * @param {string} value - 值
 * @param {array} data - 資料
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-3')
 * @returns 
 */
function CheckBars({type, name, value, data, outerClassName='m-b-3'}) {
  const content = data.map((check) => {
    return (
      <div key={`${name}-${check.value}`} className={outerClassName}>
        <div className="form__check-bar">
          <input
            id={check.id}
            type={type}
            className="form__check-bar__input"
            name={name}
            value={check.value}
            defaultChecked={(check.value === value) ? true : false}
          />
          <label htmlFor={check.id} className="form__check-bar__main">
            <p className="form__check-bar__title">
              {check.label}
              {(typeof check.price !== 'undefined') && <span className="form__check-bar__title__price">{(check.price > 0) ? '$' + check.price: '免費'}</span>}
            </p>
            <p className="form__check-bar__note">{check.note}</p>
          </label>
        </div>
      </div>
    );
  });

  return (
    <>
      {content}
    </>
  );
}

export default CheckBars;
