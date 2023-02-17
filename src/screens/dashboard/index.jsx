import { PngProfilePic } from "../../assets";
import { ButtonPrimary, Header, SearchBoxEntry } from "../../components";
export default function index() {
  return (
    <>
      <Header>
        <button className="home__header__profile">
          <div className="home__header__profile__img">
            <img src={PngProfilePic} alt="Profile Pic" />
          </div>
          <span>Emma Kwan</span>
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.27171 0.217212L4.15302 3.09852L7.03433 0.217212C7.32395 -0.0724041 7.79179 -0.0724041 8.08141 0.217212C8.37103 0.506829 8.37103 0.97467 8.08141 1.26429L4.67285 4.67285C4.38323 4.96246 3.91539 4.96246 3.62577 4.67285L0.217212 1.26429C-0.0724041 0.97467 -0.0724041 0.506829 0.217212 0.217212C0.506829 -0.064978 0.982096 -0.0724041 1.27171 0.217212Z"
              fill="#444444"
            />
          </svg>
        </button>
      </Header>
      <div className="home__main__container">
        <div className="home__state__container__wraper">
          <HomeStatCard
            bgcolor="white"
            heading="12300"
            subheading="Total Sales(rs)"
          />
          <HomeStatCard
            bgcolor="#EBF7FF"
            color="#0095EF"
            heading="12300"
            subheading="Total Profit"
          />
          <HomeStatCard
            bgcolor="#F1F1F1"
            heading="12300"
            color="#444444"
            subheading="Total Customers"
          />
          <HomeStatCard
            bgcolor="#FFD0D2"
            heading="12300"
            color="#EE3940"
            subheading="Out of Stock"
          />
        </div>
        <div className="home__container__main">
          <div className="searchBox__container">
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
            <div className="searchBox__container__body">
              <SearchBoxEntry name="Tab. Paracitamol" num={"23"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"2"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"233"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"43"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"23"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"23"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"23"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"29"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"33"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"23"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"64"} price="4rs" />
              <SearchBoxEntry name="Tab. Paracitamol" num={"21"} price="4rs" />
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
              <ButtonPrimary>Collect Bill</ButtonPrimary>
              <div className="container__home__card__footer__price">
                Total Bill <span>2300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HomeStatCard({ bgcolor, color, heading, subheading }) {
  return (
    <div className="home__header__card" style={{ backgroundColor: bgcolor }}>
      <div style={{ color: color }} className="home__header__card__heading">
        {heading}
      </div>
      <div style={{ color: color }} className="home__header__card__subheading">
        {subheading}
      </div>
    </div>
  );
}
