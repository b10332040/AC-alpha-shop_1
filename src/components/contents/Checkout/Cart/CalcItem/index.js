/**
 * 購物車價格計算
 * @param {*} param0 
 * @returns 
 */
function CalcItem({text, price}) {
  return (
    <div className="calc-item row">
      <div className="calc-item__text text col-4">{text}</div>
      <div className="calc-item__price col-8 text-right">{price}</div>
    </div>
  );
}

export default CalcItem;