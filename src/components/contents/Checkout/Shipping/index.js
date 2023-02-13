import data from './data.js'

import CheckBars from '../../../components/CheckBars';

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
        value={data.value}
        data={data.data}
        checkType="radio"
      />
    </>
  );
}

export default Shipping;
