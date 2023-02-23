import styles from './style.module.css';

/**
 * 購物籃價格計算
 * @param {string} text 文字
 * @param {number} price 價格
 * @param {boolean} showFree 是否顯示免費 (預設：否)
 * @returns 
 */
function CartCalcItem({text, price, showFree = false}) {
  price = (price === 0 && showFree) ?  '免費' : '$' + price.toString();

  return (
    <div className={`${styles['cart__calc-item']}`}>
      <div className='row'>
        <div className='col-4'>{text}</div>
        <div className='cart__calc-item__price col-8 text-right fw-bold'>{price}</div>
      </div>
    </div>
  );
}

export default CartCalcItem;