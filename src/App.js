import Header from './components/Header.js';
import { Checkout } from './components/PageContent.js';
import Footer from './components/Footer.js';
import './modules/global.module.css';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <div className="page">
        <Checkout/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
