import { ButtonPrimary, Header } from "../../../components";

function Details() {
  const BatchCard = [
    "5 March 2022",
    "500 left",
    "500 left",
    "500 left",
    "500 left",
    "500 left",
    "500 left",
  ];
  return (
    <>
      <Header>
        <div className="product__header__buttons">
          <button className="product__header__buttons__button">
            Duplicate
          </button>
          <ButtonPrimary>Create</ButtonPrimary>
        </div>
      </Header>
      <div className="product__container">
        <div className="details__container__content">
          <div className="details__container__content__details">
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Product ID
              </div>
              <div className="details__container__content__details__entry__title">
                23900
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Name
              </div>
              <div className="details__container__content__details__entry__title">
                Panadol 500mg
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Product ID
              </div>
              <div className="details__container__content__details__entry__title">
                23900
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Category
              </div>
              <div className="details__container__content__details__entry__title">
                Medicine
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Status
              </div>
              <div className="details__container__content__details__entry__title">
                Active
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Manufacturer
              </div>
              <div className="details__container__content__details__entry__title">
                Mugahal
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Distributor
              </div>
              <div className="details__container__content__details__entry__title">
                23900
              </div>
            </div>
            <div className="details__container__content__details__entry">
              <div className="details__container__content__details__entry__subtitle">
                Sale Price
              </div>
              <div className="details__container__content__details__entry__title">
                23900
              </div>
            </div>
          </div>
          <div className="details__container__content__batch__main">
            <ProductDetail heading="Batch 3-Match-22" value={BatchCard} />
            <ProductDetail heading="Batch 3-Match-22" value={BatchCard} />
            <ProductDetail heading="Batch 3-Match-22" value={BatchCard} />
          </div>
        </div>
      </div>
    </>
  );
}

function ProductDetail({ heading, value }) {
  return (
    <div className="details__container__content__batch__wraper">
      <div className="details__container__content__batch__wraper__heading">
        {heading}
      </div>
      <div className="details__container__content__entry__wraper">
        <div className="details__container__content__entry__haading">
          <div className="details__container__content__entry__haading__entry">
            Expiry Date
          </div>
          <div className="details__container__content__entry__haading__entry">
            Quantity
          </div>
          <div className="details__container__content__entry__haading__entry">
            P.Price
          </div>
          <div className="details__container__content__entry__haading__entry">
            Sale Price
          </div>
          <div className="details__container__content__entry__haading__entry">
            Dis.Price
          </div>
          <div className="details__container__content__entry__haading__entry">
            Distributor
          </div>
          <div className="details__container__content__entry__haading__entry">
            Note
          </div>
        </div>
        <div className="details__container__content__entry__haading">
          {value.map((item) => {
            return (
              <div className="details__container__content__entry__subhaading__entry">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
