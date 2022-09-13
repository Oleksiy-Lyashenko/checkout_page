import emailImg from './assets/icons/mail.svg';
import phoneImg from './assets/icons/phone.svg';
import userImg from './assets/icons/user.svg';
import homeImg from './assets/icons/home.svg';
import cityImg from './assets/icons/city.svg';
import earthImg from './assets/icons/earth.svg';
import postalImg from './assets/icons/postal.svg';

import item1 from './assets/photo1.png';
import item2 from './assets/photo2.png';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="wrapper">
          <div className="header__content">
            <h1 className="header__title">Checkout</h1>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="wrapper">
          <div className="content__body">
            <form className="information-block">
              <div className="contact-info">
                <h3 className="content__title">Contact infomation</h3>

                <label htmlFor="email" className="input">
                  <p className="input__label">E-mail</p>
                  <img src={emailImg} alt="" className="input__icon" />
                  <input type="email" className="input__field" id="email" required />
                </label>

                <label htmlFor="phone" className="input">
                  <p className="input__label">Phone</p>
                  <img src={phoneImg} alt="" className="input__icon" />
                  <input type="phone" className="input__field" id="phone" required />
                </label>
              </div>

              <div className="shipping-info">
                <h3 className="content__title">Shipping address</h3>
                <label htmlFor="email" className="input">
                  <p className="input__label">Full name</p>
                  <img src={userImg} alt="" className="input__icon" />
                  <input type="text" className="input__field" id="email" required />
                </label>
                <label htmlFor="email" className="input">
                  <p className="input__label">Address</p>
                  <img src={homeImg} alt="" className="input__icon" />
                  <input type="text" className="input__field" id="email" required />
                </label>
                <label htmlFor="email" className="input">
                  <p className="input__label">City</p>
                  <img src={cityImg} alt="" className="input__icon" />
                  <input type="text" className="input__field" id="email" required />
                </label>
                <div className="shipping-info__block">
                  <div className="shipping-info__select">
                    <label htmlFor="email" className="input">
                      <p className="input__label">Country</p>
                      <img src={earthImg} alt="" className="input__icon" />
                      <select
                        name=""
                        required
                        id=""
                        className="input__field input__field--select"
                        placeholder="Hello">
                        <option value="" disabled selected>
                          Your country
                        </option>
                        <option value="ukraine">Ukraine</option>
                        <option value="usa">USA</option>
                        <option value="polish">Polish</option>
                      </select>
                    </label>
                  </div>
                  <label htmlFor="email" className="input">
                    <p className="input__label">Postal code</p>
                    <img src={postalImg} alt="" className="input__icon" />
                    <input
                      type="text"
                      className="input__field"
                      id="email"
                      required
                      placeholder="Your postal"
                    />
                  </label>
                </div>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="checkbox" className="checkbox__field"/>
                <label htmlFor="checkbox" className="checkbox__label">
                  Save this information for next time
                </label>
              </div>

              <button className="button">Continue</button>
            </form>

            <div className="cart-block">
              <div className="cart-block__body">
                <div className="cart-block__top">
                  <div className="cart-block__item">
                    <img src={item1} alt="" className="cart-block__img" />

                    <div className="cart-block__info">
                      <div className="cart-block__title">
                        <h4 className="cart-block__name">Vintage Backbag</h4>

                        <div className="pice">
                          <span className="cart-block__price">$54.99</span>
                          <span className="cart-block__price--line">$94.99</span>
                        </div>
                      </div>

                      <div className="cart-block__amount">
                        <button className="cart-block__button">&#8722;</button>
                        <span className="cart-bloc__number">1</span>
                        <button className="cart-block__button">&#43;</button>
                      </div>
                    </div>
                  </div>

                  <div className="cart-block__item">
                    <img src={item2} alt="" className="cart-block__img" />

                    <div className="cart-block__info">
                      <div className="cart-block__title">
                        <h4 className="cart-block__name">Vintage Backbag</h4>

                        <div className="pice">
                          <span className="cart-block__price">$74.99</span>
                          <span className="cart-block__price--line">$124.99</span>
                        </div>
                      </div>

                      <div className="cart-block__amount">
                        <button className="cart-block__button">&#8722;</button>
                        <span className="cart-bloc__number">1</span>
                        <button className="cart-block__button">&#43;</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sum-block">
                  <h4 className="sum-block__title">Shipping</h4>

                  <span className="sum-block__price">$19</span>
                </div>
                <div className="sum-block">
                  <h4 className="sum-block__title">Total</h4>

                  <span className="sum-block__price">$148.98</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
