import { useContext } from 'react';
import { CartContext } from './CartContext';
import styles from './style.module.css';
import CartProductItem from './CartProductItem';
import CartCalcItem from './CartCalcItem';

/**
 * 購物籃
 * @param {function} onCountClick - 處理增加或減少購物籃商品數量
 * @param {number} shipping - 運費 (預設：0)
 */
function Cart({onCountClick, shipping=0}) {
  const shoppingList = useContext(CartContext);
  
  // 計算總金額
  let totalPrice = 0;  
  for (let i = 0; i < shoppingList.length; i++) {
    totalPrice += shoppingList[i].price * shoppingList[i].quantity;
  }

  const CartProductItems = shoppingList.map((product) => {
    return (
      <div key={`cart-productItem-${product.id}`} className='m-b-4'>
        <CartProductItem
          {...product}
          onCountClick={onCountClick}
        />
      </div>
    );
  });

  return (
    <section className={`${styles['cart']} p-x-3 p-y-4`}>
      <h2 className='d-none d-md-block m-b-3'>購物籃</h2>
      <div data-total-price={totalPrice}>
        {CartProductItems}
      </div>
      <CartCalcItem 
        text="運費"
        price={shipping}
        showFree={true}
      />
      <CartCalcItem 
        text="小計"
        price={totalPrice}
      />
    </section>
  );
}

export default Cart;