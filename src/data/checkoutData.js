export const shoppingListData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

export const addressData = {
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

export const shippingData = {
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