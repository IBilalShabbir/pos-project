export default function SearchBoxEntry({ num, name, price }) {
  return (
    <div className="searchBox__container__body__entry">
      <div className="searchBox__container__body__entry__number">
        {num + "."}
      </div>
      <div className="searchBox__container__body__entry__name">{name}</div>
      <div className="searchBox__container__body__entry__price">{price}</div>
    </div>
  );
}
