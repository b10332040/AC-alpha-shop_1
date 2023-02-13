import data from './data.js';
import styles from './style.module.css';

import Img from '../../../components/Img';

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

/**
 * 購物車價格計算
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

function Cart({shipping=0}) {
  const CartProductItems = data.map((product) => {
    return (
      <div key={`cart-productItem-${product.id}`} className='m-b-4'>
        <CartProductItem
          name={product.name}
          img={product.img}
          price={product.price}
          quantity={product.quantity}
        />
      </div>
    );
  });

  let totalPrice = 0;

  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price;
  }

  return (
    <section className={`${styles['cart']} p-x-3 p-y-4`}>
      <h2 className='d-none d-md-block m-b-3'>購物籃</h2>
      <div data-total-price={totalPrice}>
        {CartProductItems}
      </div>
      <CartCalcItem 
        text="運費"
        price={shipping}
      />
      <CartCalcItem 
        text="小計"
        price={totalPrice}
      />
    </section>
  );
}

export default Cart;