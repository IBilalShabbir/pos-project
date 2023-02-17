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
                  <option value="1">Tablet</option>
                  <option value="2">Syrup</option>
                  <option value="3">Paste</option>
                </select>
                <div className="newPorduct__container__content__form__row__select__svg__container">
                  <svg
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.33337 1L4.33337 7.66667"
                      stroke="#0095EF"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.66669 4.33337L1.00002 4.33337"
                      stroke="#0095EF"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="newPorduct__container__content__form__row__select">
                <label htmlFor="select">Category</label>
                <select name="select" id="select">
                  <option value="1">Tablet</option>
                  <option value="2">Syrup</option>
                  <option value="3">Paste</option>
                </select>
                <div className="newPorduct__container__content__form__row__select__svg__container">
                  <svg
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.33337 1L4.33337 7.66667"
                      stroke="#0095EF"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.66669 4.33337L1.00002 4.33337"
                      stroke="#0095EF"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="newPorduct__container__content__form__row__select">
                <label htmlFor="select">Status</label>
                <select name="select" id="select">
                  <option value="1">Tablet</option>
                  <option value="2">Syrup</option>
                  <option value="3">Paste</option>
                </select>
              </div>
            </div>
            <div className="newPorduct__container__content__form__row">
              <div
                style={{ maxWidth: "140px", marginRight: "1em" }}
                className="newProduct__container__content__form__row__product"
              >
                <label
                  htmlFor="salePrice"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Sale Price
                </label>
                <input
                  type="text"
                  id="salePrice"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
              <div
                style={{ maxWidth: "140px", marginRight: "1em" }}
                className="newProduct__container__content__form__row__product"
              >
                <label
                  htmlFor="discountPrice"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Discount Price
                </label>
                <input
                  type="text"
                  id="discountPrice"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
              <div
                style={{ maxWidth: "140px", marginRight: "1em" }}
                className="newProduct__container__content__form__row__product"
              >
                <label
                  htmlFor="purchasePrice"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Purchase Price
                </label>
                <input
                  type="text"
                  id="purchasePrice"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
            </div>
            <div className="newPorduct__container__content__form__row">
              <div
                style={{ maxWidth: "140px", marginRight: "1em" }}
                className="newProduct__container__content__form__row__product"
              >
                <label
                  htmlFor="manufactureDate"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Manufacture Date
                </label>
                <input
                  type="text"
                  id="manufactureDate"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
              <div
                style={{ maxWidth: "140px", marginRight: "1em" }}
                className="newProduct__container__content__form__row__product"
              >
                <label
                  htmlFor="expiryDate"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
              <div
                style={{ maxWidth: "140px", marginRight: "1em" }}
                className="newProduct__container__content__form__row__product"
              >
                <label
                  htmlFor="quantity"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
              <div
                style={{ marginLeft: "0em" }}
                className="newPorduct__container__content__form__row__select"
              >
                <label htmlFor="select">Distributor</label>
                <select name="select" id="select">
                  <option value="1">Aslam</option>
                  <option value="2">Akbar</option>
                  <option value="3">Amjad</option>
                </select>
                <div className="newPorduct__container__content__form__row__select__svg__container">
                  <svg
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.33337 1L4.33337 7.66667"
                      stroke="#0095EF"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.66669 4.33337L1.00002 4.33337"
                      stroke="#0095EF"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              style={{ borderBottom: "none" }}
              className="newPorduct__container__content__form__row"
            >
              <div className="newProduct__container__content__form__row__product">
                <label
                  htmlFor="formula"
                  className="newProduct__container__content__form__row__product__label"
                >
                  Formula
                </label>
                <input
                  type="text"
                  id="formula"
                  className="newProduct__container__content__form__row__product__input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
