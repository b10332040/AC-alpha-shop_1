import styles from './style.module.css';

import Img from '../../../../widgets/Img';

/**
 * 購物籃商品
 * @param {string} name 商品名
 * @param {string} img 圖片網址
 * @param {number} price 價格
 * @param {number} quantity 數量 
 * @returns 
 */
function CartProductItem({name, img, price, quantity}) {
  return (
    <div className='row' data-count={quantity} data-price={price}>
      <div className='col-5 col-sm-4'>
        <Img
          ratio="1x1"
          name={name}
          src={img}
          className={styles['cart__product-item__img']}
        />
      </div>
      <div className={`${styles['cart__product-item__info']} col-7 col-sm-8`}>
        <h3 className={`${styles['cart__product-item__title']}`}>{name}</h3>
        <div className={`${styles['cart__product-item__controls']} fw-bold`}>
          <button type='button' aria-label='-' title='-' className={`${styles['cart__product-item__quantity-control']}`}>-</button>
          <div className={`${styles['cart__product-item__quantity']}`}>{quantity}</div>
          <button type='button' aria-label='+' title='+' className={`${styles['cart__product-item__quantity-control']}`}>+</button>
        </div>
        <div className={`${styles['cart__product-item__price']} fw-bold`}>${price}</div>
      </div>
    </div>
  );
}

export default CartProductItem;