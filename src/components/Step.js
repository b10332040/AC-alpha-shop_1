/**
 * Step 步驟
 */

function Step1() {
  return (
    <>
      <div className="form-row">
        <div className="from-group col-4">
          <label for="call">稱謂</label>
          <select id="call" className="from-control">
            <option value="mr" selected>先生</option>
            <option value="ms">女士</option>
            <option value="mx">不明</option>
          </select>
        </div>
        <div className="from-group col-8">
          <label for="name">姓名</label>
          <input id="name" type="text" className="form-control" placeholder="請輸入姓名"></input>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="phone">電話</label>
          <input id="phone" type="tel" className="form-control" placeholder="請輸入行動電話"></input>
        </div>
        <div className="form-group col-md-6">
          <label for="email">Email</label>
          <input id="email" type="email" className="form-control" placeholder="請輸入電子郵件"></input>
        </div>
      </div>

      <div className="form-row">
        <div className="from-group col-md-4">
          <label for="city">縣市</label>
          <select id="city">
            <option value="">請選擇縣市</option>
            <option value="KLU">基隆市</option>
            <option value="TPH">新北市</option>
            <option value="TPE">臺北市</option>
            <option value="TYC">桃園市</option>
            <option value="HSH">新竹縣</option>
            <option value="HSC">新竹市</option>
            <option value="MAC">苗栗市</option>
            <option value="MAL">苗栗縣</option>
            <option value="TXG">臺中市</option>
            <option value="CWH">彰化縣</option>
            <option value="CWS">彰化市</option>
            <option value="NTC">南投市</option>
            <option value="NTO">南投縣</option>
            <option value="YLH">雲林縣</option>
            <option value="CHY">嘉義縣</option>
            <option value="CYI">嘉義市</option>
            <option value="TNN">臺南市</option>
            <option value="KHH">高雄市</option>
            <option value="IUH">屏東縣</option>
            <option value="PTS">屏東市</option>
            <option value="ILN">宜蘭縣</option>
            <option value="ILC">宜蘭市</option>
            <option value="HWA">花蓮縣</option>
            <option value="HWC">花蓮市</option>
            <option value="TTC">臺東市</option>
            <option value="TTT">臺東縣</option>
            <option value="PEH">澎湖縣</option>
            <option value="KMN">金門縣</option>
            <option value="LNN">連江縣</option>
          </select>
        </div>
        <div className="from-group col-md-8">
          <label for="address">地址</label>
          <input id="address" type="text" className="form-control" placeholder="請輸入地址"></input>
        </div>
      </div>
    </>
  );
}

function Step2() {
  return (
    <>
      <div className="form-check">
        <input id="shippingDefault" type="radio" className="form-check-input" name="shipping" value="default" checked></input>
        <label for="shippingDefault" className="form__check-bar">
          <p className="form__check-bar__title has-note">
            標準運送
            <span className="form__check-bar__title__note">免費</span>
          </p>
          <br/>
          <small className="form__check-bar__note">約 3~7 個工作天</small>
        </label>
      </div>
      <div className="form-check">
        <input id="shippingDHL" type="radio" className="form-check-input" name="shipping" value="DHL"></input>
        <label for="shippingDHL" className="form__check-bar">
          <p className="form__check-bar__title has-note">
            DHL 貨運
            <span className="form__check-bar__title__note">$500</span>
          </p>
          <br/>
          <small className="form__check-bar__note">48小時內送達</small>
        </label>
      </div>
    </>
    
  );
}

function Step3() {
  return (
    <>
      <div className="form-row">
        <div className="from-group col-8">
          <label for="creditCardName">持卡人姓名</label>
          <input id="creditCardName" type="text" className="form-control" placeholder="John Doe"></input>
        </div>
      </div>
      <div className="form-row">
        <div className="from-group col-8">
          <label for="creditCardNumber">卡號</label>
          <input id="creditCardNumber" type="text" className="form-control" placeholder="1111 2222 3333 4444"></input>
        </div>
      </div>
      <div className="form-row">
        <div className="from-group col-6">
          <label for="creditCardEffectiveDate">有效期限</label>
          <input id="creditCardEffectiveDate" type="text" className="form-control" placeholder="MM/YY"></input>
        </div>
        <div className="from-group col-6">
          <label for="creditCardCVC">CVC / CCV</label>
          <input id="creditCardCVC" type="text" className="form-control" placeholder="123"></input>
        </div> 
      </div>
    </>
  );
}

function Step({steps, currentStep = 1}) {
  const title = steps[currentStep - 1];
  const content = (currentStep === 1) ? <Step1 /> : (currentStep === 2) ? <Step2 /> : <Step3 />;
  
  return (
    <div className="c-step">
      <h2 className="c-step__title">{title}</h2>
      {content}
    </div>
  ); 
}

export default Step;