import Address from './Address';
import Shipping from './Shipping';
import CreditCard from './CreditCard';

const data = {
  step1: {
    component: Address,
    props: {
      title: '寄送地址',
    }
  },
  step2: {
    component: Shipping,
    props: {
      title: '運送方式',
    }
  },
  step3: {
    component: CreditCard,
    props: {
      title: '付款資訊',
    }
  }
}

export default data;