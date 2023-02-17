import React from "react";
import { ButtonPrimary, Header } from "../../../components";

function NewProduct() {
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
        <div className="newPorduct__container__content">
          <div className="newPorduct__container__content__form">
            <div className="newPorduct__container__content__form__row">
              <div className="newProduct__container__content__form__row__product">
                <label
                  htmlFor="productName"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
              <div className="newPorduct__container__content__form__row__select">
                <label htmlFor="select">Type</label>
                <select name="select" id="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
