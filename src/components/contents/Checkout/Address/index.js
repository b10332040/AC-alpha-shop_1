import Label from '../../../components/Label';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

/**
 * 寄送地址
 * @returns 
 */
function Address() {
  const data = {
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