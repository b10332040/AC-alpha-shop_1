import data from './data.js';
import styles from './style.module.css';

import CartProductItem from './CartProductItem';
import CartCalcItem from './CartCalcItem';

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