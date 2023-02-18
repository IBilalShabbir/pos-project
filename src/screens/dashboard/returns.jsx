import { ButtonPrimary, Header } from "../../components";
import SearchBoxTwo from "../../components/SearchBoxTwo";

export default function returns() {
  return (
    <>
      <Header />
      <div className="product__container">
        <div className="returns__container__content">
          <div style={{ width: "550px" }} className="searchBox__container">
            <div className="searchBox__container__header">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.16668"
                  cy="9.16671"
                  r="5.83333"
                  stroke="#4BC0E6"
                  stroke-width="2"
                />
                <path
                  d="M9.16666 6.66663C8.83835 6.66663 8.51326 6.73129 8.20995 6.85693C7.90663 6.98256 7.63104 7.16671 7.39889 7.39886C7.16674 7.63101 6.98259 7.9066 6.85696 8.20992C6.73132 8.51323 6.66666 8.83832 6.66666 9.16663"
                  stroke="#4BC0E6"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16.6667 16.6666L14.1667 14.1666"
                  stroke="#4BC0E6"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <input type="search" />
            </div>
            <div
              style={{ paddingRight: "0.5em" }}
              className="searchBox__container__body"
            >
              <SearchBoxTwo
                quantity={4}
                number={123}
                date="09:23pm - 23 March 22"
                price={50}
                name="Fawad Manqool"
              />
              <SearchBoxTwo
                quantity={4}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={4}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={4}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={4}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={4}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={40}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={10}
                number={23}
                date="09:23pm - 23 March 22"
                price={1000}
                name="Manqool Mian"
              />
              <SearchBoxTwo
                quantity={4}
                number={23}
                date="09:23pm - 23 March 22"
                price={5}
                name="Manqool Mian"
              />
            </div>
          </div>
          <div className="container__home__total">
            <div className="container__home__card__header">
              <div className="container__home__card__header__entry">Items</div>
              <div className="container__home__card__header__entry">
                Unit Price(Rs)
              </div>
              <div className="container__home__card__header__entry">
                Quantity
              </div>
              <div className="container__home__card__header__entry">
                Total(Rs)
              </div>
            </div>
            <div className="container__home__card__content">
              <div className="container__home__card__total__subentry">
                <div className="container__home__card__total__subentry__item">
                  Panadol
                </div>
                <div className="container__home__card__total__subentry__price">
                  2000
                </div>
                <div className="container__home__card__total__subentry__input">
                  <input type="number" />
                </div>
                <div className="container__home__card__total__subentry__total">
                  50000
                </div>
                <div className="container__home__card__total__subentry__total__svg">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.99976L7 0.999756"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7L1 1"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="container__home__card__total__subentry">
                <div className="container__home__card__total__subentry__item">
                  Panadol
                </div>
                <div className="container__home__card__total__subentry__price">
                  2000
                </div>
                <div className="container__home__card__total__subentry__input">
                  <input type="number" />
                </div>
                <div className="container__home__card__total__subentry__total">
                  50000
                </div>
                <div className="container__home__card__total__subentry__total__svg">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.99976L7 0.999756"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7L1 1"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="container__home__card__total__subentry">
                <div className="container__home__card__total__subentry__item">
                  Panadol
                </div>
                <div className="container__home__card__total__subentry__price">
                  2000
                </div>
                <div className="container__home__card__total__subentry__input">
                  <input type="number" />
                </div>
                <div className="container__home__card__total__subentry__total">
                  50000
                </div>
                <div className="container__home__card__total__subentry__total__svg">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.99976L7 0.999756"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7L1 1"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="container__home__card__total__subentry">
                <div className="container__home__card__total__subentry__item">
                  Panadol
                </div>
                <div className="container__home__card__total__subentry__price">
                  2000
                </div>
                <div className="container__home__card__total__subentry__input">
                  <input type="number" />
                </div>
                <div className="container__home__card__total__subentry__total">
                  50000
                </div>
                <div className="container__home__card__total__subentry__total__svg">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.99976L7 0.999756"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7L1 1"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="container__home__card__total__subentry">
                <div className="container__home__card__total__subentry__item">
                  Panadol
                </div>
                <div className="container__home__card__total__subentry__price">
                  2000
                </div>
                <div className="container__home__card__total__subentry__input">
                  <input type="number" />
                </div>
                <div className="container__home__card__total__subentry__total">
                  50000
                </div>
                <div className="container__home__card__total__subentry__total__svg">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.99976L7 0.999756"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7L1 1"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="container__home__card__total__subentry">
                <div className="container__home__card__total__subentry__item">
                  Panadol
                </div>
                <div className="container__home__card__total__subentry__price">
                  2000
                </div>
                <div className="container__home__card__total__subentry__input">
                  <input type="number" />
                </div>
                <div className="container__home__card__total__subentry__total">
                  50000
                </div>
                <div className="container__home__card__total__subentry__total__svg">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.99976L7 0.999756"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7L1 1"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="container__home__card__footer">
              <ButtonPrimary>Return</ButtonPrimary>
              <div className="container__home__card__footer__price">
                Amount to be returned <span>2300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
