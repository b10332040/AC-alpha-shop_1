/**
 * 購物籃商品
 * @param {string} id
 * @param {string} name 商品名
 * @param {string} img 圖片網址
 * @param {number} price 價格
 * @param {number} quantity 數量 
 * @returns 
 */
function ProductItem({id, name, img, price, quantity}) {
  return (
    <div className="product-item row" data-count={quantity} data-price={price}>
      <img className="product-item__img col-4" src={img} title={name} alt={name} />
      <div className="product-item__info col-8 text-right">
        <h3 className="product-item__name">{name}</h3>
        <div className="product-item__controls">
          <span className="product-item__control minus"></span>
          <span className="product-item__count">{quantity}</span>
          <span className="product-item__control plus"></span>
        </div>
        <div className="product-item__price">{price}</div>
      </div>
    </div>
  );
}

export default ProductItem;