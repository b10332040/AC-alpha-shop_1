import data from './data.js';

import ProductItem from './ProductItem';
import CalcItem from './CalcItem';

function Cart({shipping=0}) {
  const ProductItems = data.map((product) => {
    return (
      <ProductItem
        key={`cart-productItem-${product.id}`}
        id={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        quantity={product.quantity}
      />
    );
  });

  let totalPrice = 0;

  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price;
  }

  return (
    <section className="cart">
      <h2>購物籃</h2>
      <div className='cart__product-list' data-total-price="">
        {ProductItems}
      </div>
      <CalcItem 
        text="運費"
        price={shipping}
      />
      <CalcItem 
        text="小計"
        price={totalPrice}
      />
    </section>
  );
}

export default Cart;