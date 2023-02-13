import React from 'react';

import Checkout from './components/contents/Checkout';

import './assets/styles/global.module.css';

function App() {
  const data = {
    component: Checkout,
    props: {
      currentStep: 2,
    }
  }
  const Content = React.createElement(
    data.component,
    data.props
  );

  return (
    <div className="App">
      {/* <Header/> */}
      <div className="p-y-5">
        {Content}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
