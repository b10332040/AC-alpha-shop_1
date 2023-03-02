/**
 * 箭頭按鈕
 * @param {string} className - class name
 * @param {string} type - 按鈕類型 (預設：button)
 * @param {string} text - 文字
 * @param {string} arrowDirection - 箭頭方向
 * @param {function} onClick - 點擊事件處裡函式
 * @returns 
 */
export function ArrowButton({className, type='button', text, arrowDirection='right', onClick}) {
  return (
    <button className={`btn ${className}`} type={type} title={text} aria-label={text} onClick={onClick}>
      {(arrowDirection === 'left') && <span className="btn__arrow is-left"></span>}
      {text}
      {(arrowDirection === 'right') && <span className="btn__arrow is-right"></span>}
    </button>
  );
}

/**
 * 按鈕
 * @param {string} className - class name
 * @param {string} type - 按鈕類型 (預設：button)
 * @param {string} text - 文字
 * @param {boolean} disabled - 不可點按按鈕 (預設：false)
 * @returns 
 */
export function Button({className, type='button', text, disabled=false}) {
  if (disabled) {
    return (
      <button className={`btn ${className}`} type={type} title={text} aria-label={text} disabled>
        {text}
      </button>
    );
  }
  return (
    <button className={`btn ${className}`} type={type} title={text} aria-label={text}>
      {text}
    </button>
  );
}