/**
 * Step 步驟
 */
import {FormControl} from './Form.js';
import {FormLabel} from './Form.js';

function Step1() {
  const formControls = {
    call: {
      value: 'mr',
      options: [
        {
          value: 'mr',
          displayValue: '先生'
        },
        {
          value: 'ms',
          displayValue: '女士'
        },
        {
          value: 'mx',
          displayValue: '不明'
        }
      ]
    },
    city: {
      value: '',
      options: [
        {
          value: '',
          displayValue: '請選擇縣市'
        },
        {
          value: 'KLU',
          displayValue: '基隆市'
        },
        {
          value: 'TPH',
          displayValue: '新北市'
        },
        {
          value: 'TPE',
          displayValue: '臺北市'
        },
        {
          value: 'TYC',
          displayValue: '桃園市'
        },
        {
          value: 'HSH',
          displayValue: '新竹縣'
        },
        {
          value: 'HSC',
          displayValue: '新竹市'
        },
        {
          value: 'MAC',
          displayValue: '苗栗市'
        },
        {
          value: 'MAL',
          displayValue: '苗栗縣'
        },
        {
          value: 'TXG',
          displayValue: '臺中市'
        },
        {
          value: 'CWH',
          displayValue: '彰化縣'
        },
        {
          value: 'CWS',
          displayValue: '彰化市'
        },
        {
          value: 'NTC',
          displayValue: '南投市'
        },
        {
          value: 'NTO',
          displayValue: '南投縣'
        },
        {
          value: 'YLH',
          displayValue: '雲林縣'
        },
        {
          value: 'CHY',
          displayValue: '嘉義縣'
        },
        {
          value: 'CYI',
          displayValue: '嘉義市'
        },
        {
          value: 'TNN',
          displayValue: '臺南市'
        },
        {
          value: 'KHH',
          displayValue: '高雄市'
        },
        {
          value: 'IUH',
          displayValue: '屏東縣'
        },
        {
          value: 'PTS',
          displayValue: '屏東市'
        },
        {
          value: 'ILN',
          displayValue: '宜蘭縣'
        },
        {
          value: 'ILC',
          displayValue: '宜蘭市'
        },
        {
          value: 'HWA',
          displayValue: '花蓮縣'
        },
        {
          value: 'HWC',
          displayValue: '花蓮市'
        },
        {
          value: 'TTC',
          displayValue: '臺東市'
        },
        {
          value: 'TTT',
          displayValue: '臺東縣'
        },
        {
          value: 'PEH',
          displayValue: '澎湖縣'
        },
        {
          value: 'KMN',
          displayValue: '金門縣'
        },
        {
          value: 'LNN',
          displayValue: '連江縣'
        }
      ]
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4">
          <FormLabel
            targetId="call"
            label="稱謂"
          />
          <FormControl 
            controlType="select"
            name="call"
            value={formControls.call.value}
            data={formControls.call.options}
          />
        </div>
        <div className="col-12 col-md-8">
          <FormLabel
            targetId="name"
            label="姓名"
          />
          <FormControl 
            controlType="text"
            name="name"
            placeholder="請輸入姓名"
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-12 col-md-6">
          <FormLabel
            targetId="phone"
            label="電話"
          />
          <FormControl 
            controlType="tel"
            name="phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <FormLabel
            targetId="email"
            label="Email"
          />
          <FormControl 
            controlType="email"
            name="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <FormLabel
            targetId="city"
            label="縣市"
          />
          <FormControl 
            controlType="select"
            name="city"
            data={formControls.city.options}
          />
        </div>
        <div className="col-md-8">
          <FormLabel
            targetId="address"
            label="地址"
          />
          <FormControl 
            controlType="text"
            name="address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </>
  );
}

function Step2() {
  const formControls = {
    shipping: {
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
  }

  return (
    <>
      <FormControl 
        controlType="checkBars"
        name="shipping"
        value={formControls.shipping.value}
        data={formControls.shipping.data}
        checkType="radio"
      />
    </>
  );
}

function Step3() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8">
          <FormLabel
            targetId="creditCardName"
            label="持卡人姓名"
          />
          <FormControl 
            controlType="text"
            name="creditCardName"
            placeholder="John Doe"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <FormLabel
            targetId="creditCardNumber"
            label="卡號"
          />
          <FormControl 
            controlType="text"
            name="creditCardNumber"
            placeholder="1111 2222 3333 4444"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <FormLabel
            targetId="creditCardEffectiveDate"
            label="有效期限"
          />
          <FormControl 
            controlType="text"
            name="creditCardEffectiveDate"
            placeholder="MM/YY"
          />
        </div>
        <div className="col-12 col-md-6">
          <FormLabel
            targetId="creditCardCVC"
            label="CVC / CCV"
          />
          <FormControl 
            controlType="text"
            name="creditCardCVC"
            placeholder="123"
          />
        </div> 
      </div>
    </>
  );
}

/**
 * 步驟表單
 * @param {array} 所有步驟 
 * @param {number} 當前步驟(預設：1) 
 * @returns 
 */
function Step({steps, currentStep = 1}) {
  const title = steps[currentStep - 1];
  const content = (currentStep === 1) ? <Step1 /> : (currentStep === 2) ? <Step2 /> : <Step3 />;
  
  return (
    <div className="c-step">
      <h2 className="c-step__title m-y-3">{title}</h2>
      {content}
    </div>
  ); 
}

export default Step;