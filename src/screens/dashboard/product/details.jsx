import { ButtonPrimary, Header } from "../../../components";

function Details() {
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
          <div className="details__container__content__batch"></div>
        </div>
      </div>
    </>
  );
}

export default Details;
