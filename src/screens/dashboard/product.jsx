export default function product() {
  return (
    <div className="product__container">
      <div className="product__container__header">
        <div className="product__container__header__left">
          <div className="product__container__header__left__content">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.16668"
                cy="9.16667"
                r="5.83333"
                stroke="#4BC0E6"
                stroke-width="2"
              />
              <path
                d="M9.16666 6.66666C8.83835 6.66666 8.51326 6.73133 8.20995 6.85697C7.90663 6.9826 7.63104 7.16675 7.39889 7.3989C7.16674 7.63104 6.98259 7.90664 6.85696 8.20996C6.73132 8.51327 6.66666 8.83836 6.66666 9.16666"
                stroke="#4BC0E6"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.6667 16.6667L14.1667 14.1667"
                stroke="#4BC0E6"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="product__container__header__right">
          <div className="product__container__header__right__content">
            <select name="sort" id="sort">
              <option value="1">Assending</option>
              <option value="1">dessending</option>
              <option value="1">Assending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product__container__body">Body</div>
    </div>
  );
}
