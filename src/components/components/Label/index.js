/**
 * 欄位標籤
 * @param {string} targetId - 對應的欄位id
 * @param {string} text - 標籤名稱
 * @param {string} outerClassName - 父層的 class name  (預設：'m-b-1')
 * @returns 
 */
function Label({targetId, text, outerClassName='m-b-1'}) {
  return (
    <div className={outerClassName}>
      <label htmlFor={targetId} className='form__label'>{text}</label>
    </div>
  );
}

export default Label;
