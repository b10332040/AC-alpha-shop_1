import { useContext } from 'react';
import { ShoppingDataContext } from '../../../../context/CheckoutContext'
import Label from '../../../widgets/Label';
import Input from '../../../widgets/Input';

/**
 * 付款資訊
 * @param {function} onChange 處理輸入框的值改變 
 * @returns 
 */
function CreditCard({onChange}) {
  const shoppingData = useContext(ShoppingDataContext);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8">
          <Label
            targetId="creditCardName"
            text="持卡人姓名"
          />
          <Input 
            type="text"
            name="creditCardName"
            value={(shoppingData.creditCardName) ? shoppingData.creditCardName : ''}
            placeholder="John Doe"
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <Label
            targetId="creditCardNumber"
            text="卡號"
          />
          <Input 
            type="text"
            name="creditCardNumber"
            value={(shoppingData.creditCardNumber) ? shoppingData.creditCardNumber : ''}
            placeholder="1111 2222 3333 4444"
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Label
            targetId="creditCardEffectiveDate"
            text="有效期限"
          />
          <Input 
            type="text"
            name="creditCardEffectiveDate"
            value={(shoppingData.creditCardEffectiveDate) ? shoppingData.creditCardEffectiveDate : ''}
            placeholder="MM/YY"
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className="col-12 col-md-6">
          <Label
            targetId="creditCardCVC"
            text="CVC / CCV"
          />
          <Input 
            type="text"
            name="creditCardCVC"
            value={(shoppingData.creditCardCVC) ? shoppingData.creditCardCVC : ''}
            placeholder="123"
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div> 
      </div>
    </>
  );
}

export default CreditCard;