import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import MenuItem from "./MenuItem";

const dataSecondLvlCatalog = ["чай", "Бульйон", "Лимонад"];

const SecondLvlMenu = ({
  setSecondMobileMenu,
  closeAllMobileMenu,
  ...props
}: {
  setSecondMobileMenu?: Dispatch<SetStateAction<boolean>>;
  closeAllMobileMenu?: () => void;
} & HTMLAttributes<HTMLUListElement>) => {
  return (
    <div className="catalog-mobile-wrapper">
      <header>
        <span
          onClick={() => {
            setSecondMobileMenu && setSecondMobileMenu(false);
          }}>
          <img src="/Some/chevron.svg" alt="chevron" />
          Назад
        </span>
        <h3>Напої</h3>
      </header>
      <ul {...props} className="header__second-lvl-catalog" id="second-menu">
        {dataSecondLvlCatalog.map((item, key) => (
          <MenuItem key={key}>{item}</MenuItem>
        ))}
      </ul>
      <div
        onClick={() => {
          closeAllMobileMenu && closeAllMobileMenu();
        }}
        className="mobile-close-btn">
        <img src="/Mobile/Some/closed.svg" alt="closed" />
      </div>
    </div>
  );
};

export default SecondLvlMenu;
