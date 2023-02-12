import Label from '../../../components/Label';
import Input from '../../../components/Input';

function CreditCard() {
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
            placeholder="John Doe"
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
            placeholder="1111 2222 3333 4444"
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
            placeholder="MM/YY"
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
            placeholder="123"
          />
        </div> 
      </div>
    </>
  );
}

export default CreditCard;