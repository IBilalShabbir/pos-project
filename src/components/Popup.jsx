import React from "react";

function Popup() {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    showPopup && (
      <div className="popup__container">
        <div className="popup__container__overlay">
          <div className="popup__container__content">
            <div className="popup__container__content__header">
              <div className="popup__container__content__header__left">
                <svg
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0036007 11.3668C0.0036007 8.30585 0.0036007 5.24312 0.0036007 2.18213C0.0036007 2.07622 -0.00176633 1.96857 0.0107567 1.8644C0.075161 1.33137 0.645855 1.05704 1.11457 1.34005C1.38472 1.50326 1.64591 1.68383 1.90711 1.85919C2.29353 2.11789 2.48317 2.11962 2.87675 1.86092C3.33652 1.55708 3.7963 1.25324 4.25607 0.951134C4.63177 0.704588 4.89475 0.709797 5.2615 0.954606C5.74274 1.27581 6.22398 1.59528 6.70881 1.90954C7.01473 2.10747 7.23298 2.10052 7.54248 1.89738C8.03267 1.57618 8.52465 1.25324 9.01663 0.932035C9.35296 0.713269 9.61773 0.711533 9.95407 0.930299C10.4228 1.23588 10.8897 1.54666 11.3566 1.85398C11.7663 2.1231 11.947 2.11962 12.3495 1.85051C12.8218 1.53451 13.3013 1.2272 13.7772 0.914673C14.0777 0.716741 14.3747 0.728895 14.6699 0.921618C15.1458 1.2324 15.6216 1.54493 16.0957 1.86092C16.4714 2.11094 16.6611 2.11615 17.0439 1.87308C17.3194 1.69945 17.5913 1.52062 17.8686 1.35221C18.3749 1.04663 18.9564 1.34179 18.9957 1.92169C19.0011 2.01024 18.9993 2.09879 18.9993 2.18734C18.9993 8.31974 18.9993 14.4521 18.9993 20.5845C18.9993 20.6818 19.0029 20.779 18.9939 20.8762C18.9403 21.4075 18.3696 21.6905 17.8973 21.4145C17.6003 21.2408 17.3158 21.0499 17.0296 20.8606C16.7469 20.6731 16.4732 20.6783 16.1923 20.8658C15.7272 21.1766 15.2585 21.4839 14.7898 21.7912C14.3586 22.0742 14.1386 22.0742 13.7181 21.7964C13.2512 21.4891 12.7825 21.1801 12.3138 20.8728C11.9935 20.6627 11.7753 20.6644 11.4568 20.8745C10.9666 21.1974 10.4747 21.5186 9.98448 21.8416C9.67319 22.0464 9.38337 22.0551 9.0703 21.852C8.57832 21.5325 8.08992 21.2061 7.59794 20.8849C7.2473 20.6557 7.03798 20.6627 6.69449 20.8901C6.22041 21.2044 5.74095 21.5117 5.27044 21.8312C4.94484 22.0517 4.63177 22.0517 4.30796 21.8346C3.83387 21.5186 3.35441 21.2131 2.8839 20.8919C2.5762 20.6818 2.28816 20.6661 1.97867 20.8832C1.74252 21.0481 1.48669 21.1887 1.24696 21.3502C0.985766 21.5256 0.719204 21.635 0.407917 21.4683C0.101996 21.3051 -0.00176633 21.0446 2.26832e-05 20.7148C0.00717872 19.4664 0.00181169 18.2198 0.00181169 16.9714C0.0036007 15.1015 0.0036007 13.2333 0.0036007 11.3668ZM9.50145 10.6307C8.95401 10.6307 8.40836 10.6307 7.86093 10.6307C7.23298 10.6307 6.60325 10.6237 5.97531 10.6359C5.67834 10.6411 5.37063 10.6984 5.24182 11.0022C4.98062 11.6116 5.27939 12.0735 5.95027 12.1325C6.02183 12.1395 6.09518 12.1377 6.16852 12.1377C8.39226 12.1377 10.6142 12.1377 12.8379 12.1395C13.0133 12.1395 13.185 12.1273 13.3514 12.0787C13.5196 12.0301 13.677 11.9502 13.7575 11.787C14.042 11.2054 13.7128 10.6671 13.0562 10.6359C12.965 10.6307 12.8737 10.6341 12.7825 10.6341C11.6876 10.6307 10.5945 10.6307 9.50145 10.6307ZM9.47998 9.05937C10.6375 9.05937 11.7967 9.06285 12.9542 9.05764C13.6072 9.05417 13.804 8.85797 13.7986 8.23987C13.7951 7.8388 13.6627 7.6808 13.2548 7.60961C13.1653 7.59399 13.0741 7.59225 12.9829 7.59225C10.6571 7.59052 8.33322 7.59225 6.00751 7.59052C5.81251 7.59052 5.62645 7.62003 5.45292 7.71032C5.36168 7.7572 5.28654 7.81796 5.24361 7.91172C4.9681 8.50899 5.28296 9.01944 5.95205 9.0559C6.04329 9.06111 6.13453 9.05937 6.22577 9.05937C7.30991 9.05937 8.39584 9.05937 9.47998 9.05937ZM9.5086 13.7056C8.44235 13.7056 7.3761 13.7056 6.30986 13.7056C6.15421 13.7056 5.99678 13.6917 5.8465 13.716C5.59246 13.7559 5.32232 13.8132 5.22929 14.0858C4.99493 14.7664 5.29728 15.1623 6.03793 15.1744C6.07371 15.1744 6.11128 15.1744 6.14706 15.1744C8.38868 15.1744 10.6303 15.1744 12.8737 15.1744C13.0562 15.1744 13.2387 15.1675 13.414 15.1102C13.5571 15.0633 13.6806 14.9886 13.7521 14.8567C14.0545 14.2993 13.736 13.7455 13.0938 13.709C13.0025 13.7038 12.9113 13.7056 12.8201 13.7056C11.7145 13.7056 10.6106 13.7056 9.5086 13.7056Z"
                    fill="#444444"
                  />
                </svg>
                Recipt-2344
              </div>
              <div className="popup__container__content__header__right">
                <button
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  <div className="popup__container__content__header__right__svg">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.750122 9.24951L9.25012 0.749511"
                        stroke="#0192C0"
                        stroke-width="1.2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M9.25 9.25L0.750001 0.750001"
                        stroke="#0192C0"
                        stroke-width="1.2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
