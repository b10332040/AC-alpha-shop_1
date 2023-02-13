import styles from './style.module.css';

/**
 * 購物籃價格計算
 * @param {string} text 文字
 * @param {number} price 價格
 * @returns 
 */
function CartCalcItem({text, price}) {
  price = (price > 0) ? '$' + price.toString() : '免費';

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