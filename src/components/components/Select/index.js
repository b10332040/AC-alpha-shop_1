/**
 * 下拉選單
 * @param {string} name - 名稱
 * @param {string} id - id (預設：跟 name 一樣)
 * @param {string} value - 值 (預設：'')
 * @param {array} data - 資料
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-3')
 * @returns 
 */
function Select({name, id, value, data, outerClassName='m-b-3'}) {
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

export default Select;