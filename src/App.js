import React from 'react';
import Checkout from './components/Checkout.js';
import './modules/global.module.css';

function App() {
  const data = {
    component: Checkout,
    props: {
      title: '結帳',
      currentStep: 1,
    }
  }
  const Main = React.createElement(
    data.component,
    data.props
  );

  return (
    <div className="App">
      {/* <Header/> */}
      <div className="p-y-5">
        {Main}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
