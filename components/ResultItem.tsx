const ResultItem = () => {
  return (
    <li className="catalog-result__item">
      <div className="catalog-result__img">
        <img src="/image2.png" alt="item image" />
      </div>
      <div className="catalog-result__desc">
        <span className="catalog-result__title">
          Чай "Асорті" (12 шт), 50 г.
        </span>
        <span className="catalog-result__price">
          294,84 грн.
          <span className="catalog-result__count">1 уп.</span>
        </span>
      </div>
    </li>
  );
};

export default ResultItem;
