/**
 * 欄位 - 下拉選單
 * @param {string} id - id
 * @param {string} name - 名稱
 * @param {string} value - 值
 * @param {array} data - 資料
 * @param {string} outerClassName - 父層的 class name
 * @returns 
 */
function Select({id, name, value, data, outerClassName}) {
  const content = data.map((option) => {
    return (
      <option key={`${name}-${option.value}`} value={option.value}>{option.displayValue}</option>
    );
  });

  return (
    <div className={`form__control-outer--select ${outerClassName}`}>
      <select id={id} name={name} defaultValue={value} className='form__control'>
        {content}
      </select>
    </div>
  );
}

/**
 * 欄位 - 文字類型的 (例：text, email, tel...)
 * @param {string} id - id
 * @param {string} name - 名稱
 * @param {string} value - 值
 * @param {string} controlType - 類型
 * @param {string} placeholder - 提示文字
 * @param {string} outerClassName - 父層的 class name
 * @returns 
 */
function Text({id, name, value, controlType, placeholder, outerClassName}) {
  return (
    <div className={outerClassName}>
      <input id={id} name={name} type={controlType} placeholder={placeholder} defaultValue={value} className='form__control' />
    </div>
  );
}

/**
 * 欄位 - 條狀單選或複選
 * @param {string} name - 名稱
 * @param {string} value - 值
 * @param {array} data - 資料
 * @param {string} checkType - 單選或複選
 * @param {string} outerClassName - 父層的 class name
 * @returns 
 */
function CheckBars({name, value, data, checkType, outerClassName}) {
  const content = data.map((check) => {
    return (
      <div key={`${name}-${check.value}`} className={outerClassName}>
        <div className="form__check-bar">
          <input
            id={check.id}
            type={checkType}
            className="form__check-bar__input"
            name={name}
            value={data.value}
            defaultChecked={(data.value === value) ? 'true' : 'false'}
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

/**
 * 依據欄位類型回傳對應的欄位結構
 * @param {string} controlType - 類型
 * @param {string} name - 名稱
 * @param {string} id - id (預設：跟 name 一樣)
 * @param {string} value - 值 (預設：'')
 * @param {array} data - data - 下拉選單或單、複選資料 (預設：[])
 * @param {string} placeholder - 提示文字 (預設：'')
 * @param {string} checkType - 單選或複選 (預設：'radio' 單選)
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-3')
 * @returns 
 */
export function FormControl({controlType, name, id=name, value='', data=[], placeholder='', checkType='radio', outerClassName='m-b-3'}) {
  let content = <></>;

  switch (controlType) {
    case "select":
      content = <Select id={id} name={name} value={value} data={data} outerClassName={outerClassName} />;
      break;

    case "text":
    case "tel":
    case "email":
      content = <Text id={id} name={name} value={value} controlType={controlType} placeholder={placeholder} outerClassName={outerClassName} />;
      break;

    case "checkBars":
      content = <CheckBars name={name} value={value} data={data} checkType={checkType} outerClassName={outerClassName} />;
      break;

    default:
      content = <></>;
  }

  return (
    <>
      {content}
    </>
  );
}

/**
 * 欄位標籤
 * @param {string} targetId - 對應的欄位id
 * @param {label} label - 標籤名稱
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-1')
 * @returns 
 */
export function FormLabel({targetId, label, outerClassName='m-b-1'}) {
  return (
    <div className={outerClassName}>
      <label htmlFor={targetId} className='form__label'>{label}</label>
    </div>
  );
}