import { Header } from "../../components";
import SearchBoxTwo from "../../components/SearchBoxTwo";
export default function reports() {
  return (
    <>
      <Header />
      <div className="product__container">
        <div className="report__section__search">
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
          <input type="search" placeholder="Pana" />
        </div>
        <div className="returns__container__content">
          <div style={{ width: "550px" }} className="searchBox__container">
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
        </div>
      </div>
    </>
  );
}
