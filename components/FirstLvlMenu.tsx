import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import MenuItem from "./MenuItem";

const dataFirstLvlCatalog = [
  "Дегустаційні набори",
  "Напої",
  "Перші страви",
  "Другі страви",
  "Фуд конструктор",
  "Хлібобулочні вироби",
  "Фаст фуд",
  "На вугіллі",
  "Напівфабрикати",
  "Соуси",
  "Десерти",
  "Інші товари",
];

const FirstLvlMenu: React.FC<
  HTMLAttributes<HTMLUListElement> & {
    setFirstMobileMenu?: Dispatch<SetStateAction<boolean>>;
    setSecondMobileMenu?: Dispatch<SetStateAction<boolean>>;
    closeAllMobileMenu?: () => void;
  }
> = ({
  setFirstMobileMenu,
  setSecondMobileMenu,
  closeAllMobileMenu,
  ...props
}) => {
  return (
    <div className="catalog-mobile-wrapper">
      <header>
        <span
          onClick={() => {
            setFirstMobileMenu && setFirstMobileMenu(false);
          }}>
          <img src="/Some/chevron.svg" alt="chevron" />
          Назад
        </span>
        <h3>Меню каталога</h3>
      </header>
      <ul {...props} className="header__first-lvl-catalog">
        {dataFirstLvlCatalog.map((item) => (
          <MenuItem
            onClick={() => setSecondMobileMenu && setSecondMobileMenu(true)}>
            {item}
          </MenuItem>
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

export default FirstLvlMenu;
