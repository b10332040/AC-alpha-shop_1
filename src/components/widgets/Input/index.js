/**
 * 輸入框
 * @param {string} type - 類型
 * @param {string} name - 名稱
 * @param {string} id - id (預設：跟 name 一樣)
 * @param {string} value - 值 (預設：'')
 * @param {string} placeholder - 提示文字 (預設：'')
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-3')
 * @param {function} onChange - 處理輸入的值改變
 * @returns 
 */
function Input({type, name, id=name, value='', placeholder='', outerClassName='m-b-3', onChange}) {
  return (
    <div className={outerClassName}>
      <input id={id} name={name} type={type} placeholder={placeholder} defaultValue={value} className='form__control' onChange={onChange}/>
    </div>
  );
}

export default Input;
