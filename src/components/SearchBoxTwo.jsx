export default function SearchBoxTwo({ number, name, quantity, date, price }) {
  return (
    <div className="searchBoxTwo__container__entry">
      <div className="searchBoxTwo__container__entry__number">
        {number + "."}
      </div>
      <div className="searchBoxTwo__container__entry__name">{name}</div>
      <div className="searchBoxTwo__container__entry__quantity">
        {quantity + " Items"}
      </div>
      <div className="searchBoxTwo__container__entry__date">{date}</div>
      <div className="searchBoxTwo__container__entry__price">
        {price + "rs"}
      </div>
    </div>
  );
}
