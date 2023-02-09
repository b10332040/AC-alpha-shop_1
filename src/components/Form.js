
import { Fragment } from 'react';
import '../modules/Form.module.css';

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
    <div className={outerClassName}>
      <select id={id} name={name} className='form__control' defaultValue={value}>
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
 * @param {string} type - 類型
 * @param {string} placeholder - 提示文字
 * @param {string} outerClassName - 父層的 class name
 * @returns 
 */
function Text({id, name, value, type, placeholder, outerClassName}) {
  return (
    <div className={outerClassName}>
      <input id={id} name={name} type={type} placeholder={placeholder} defaultValue={value} />
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
            <br/>
            <small className="form__check-bar__note">{check.note}</small>
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
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-2')
 * @returns 
 */
export function FormControl({controlType, name, id=name, value='', data=[], placeholder='', checkType='radio', outerClassName='m-b-2'}) {
  let content = <></>;

  switch (controlType) {
    case "select":
      content = <Select id={id} name={name} value={value} data={data} outerClassName={outerClassName} />;
      break;

    case "text":
    case "tel":
    case "email":
      content = <Text id={id} name={name} value={value} type={controlType} placeholder={placeholder} outerClassName={outerClassName} />;
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
 * @param {string} className - class name (預設：'form__label')
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-1')
 * @returns 
 */
export function FormLabel({targetId, label, className='form__label', outerClassName='m-b-1'}) {
  return (
    <div className={outerClassName}>
      <label htmlFor={targetId} className={className}>{label}</label>
    </div>
  );
}