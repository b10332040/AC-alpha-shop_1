import data from './data.js';

import Label from '../../../components/Label';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

/**
 * 寄送地址
 * @returns 
 */
function Address() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4">
          <Label
            targetId="call"
            text="稱謂"
          />
          <Select 
            name="call"
            value={data.call.value}
            data={data.call.options}
          />
        </div>
        <div className="col-12 col-md-8">
          <Label
            targetId="name"
            text="姓名"
          />
          <Input 
            type="text"
            name="name"
            placeholder="請輸入姓名"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <Label
            targetId="phone"
            text="電話"
          />
          <Input 
            type="tel"
            name="phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div className="col-12 col-md-6">
          <Label
            targetId="email"
            text="Email"
          />
          <Input 
            type="email"
            name="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <Label
            targetId="city"
            text="縣市"
          />
          <Select 
            name="city"
            data={data.city.options}
          />
        </div>
        <div className="col-12 col-md-8">
          <Label
            targetId="address"
            text="地址"
          />
          <Input 
            type="text"
            name="address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </>
  );
}

export default Address;