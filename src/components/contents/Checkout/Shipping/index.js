import CheckBars from '../../../components/CheckBars';

/**
 * 運送方式
 * @returns 
 */
function Shipping() {
  const data = {
    value: 'default',
    data: [
      {
        id: 'shippingDefault',
        value: 'default',
        label: '標準運送',
        price: 0,
        note: '約 3~7 個工作天'
      },
      {
        id: 'shippingDHL',
        value: 'DHL',
        label: 'DHL 貨運',
        price: 500,
        note: '48小時內送達'
      }
    ]
  }

  return (
    <>
      <CheckBars 
        type="radio"
        name="shipping"
        value={data.value}
        data={data.data}
        checkType="radio"
      />
    </>
  );
}

export default Shipping;
