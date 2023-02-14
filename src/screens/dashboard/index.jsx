import { SearchBoxEntry } from "../../components";
export default function index() {
  return (
    <>
      <div className="home__state__container__wraper">
        <HomeStatCard
          color="white"
          heading="12300"
          subheading="Total Sales(rs)"
        />
        <HomeStatCard
          color="#EBF7FF"
          heading="12300"
          subheading="Total Profit"
        />
        <HomeStatCard
          color="#F1F1F1"
          heading="12300"
          subheading="Total Customers"
        />
        <HomeStatCard
          color="#FFD0D2"
          heading="12300"
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
            <div className="container__home__card__header__entry">Quantity</div>
            <div className="container__home__card__header__entry">Total</div>
          </div>
          <div className="container__home__card__total__subentry">
            <div className="container__home__card__total__subentry__item">
              panadol
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
      </div>
    </>
  );
}

function HomeStatCard({ color, heading, subheading }) {
  return (
    <div className="home__header__card" style={{ backgroundColor: color }}>
      <div className="home__header__card__heading">{heading}</div>
      <div className="home__header__card__subheading">{subheading}</div>
    </div>
  );
}
