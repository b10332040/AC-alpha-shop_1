import { shippingData } from '../../../../data/checkoutData'
import CheckBars from '../../../widgets/CheckBars';

/**
 * 運送方式
 * @returns 
 */
function Shipping() {
  return (
    <>
      <CheckBars 
        type="radio"
        name="shipping"
        value={shippingData.value}
        data={shippingData.data}
        checkType="radio"
      />
    </>
  );
}

export default Shipping;
