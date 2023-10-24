import React from "react";

const MobileBottomMenu = ({
  setFirstMobileMenu,
}: {
  setFirstMobileMenu: (arg: boolean) => void;
}) => {
  return (
    <div className="mobile-bottom-menu">
      <div>
        <img src="/Mobile/Some/book.svg" alt="book" />
        <p>Кабінет</p>
      </div>
      <div onClick={() => setFirstMobileMenu(true)}>
        <img src="/Mobile/Some/Catalog.svg" alt="Catalog" />
        <p>Каталог</p>
      </div>
      <div>
        <img src="/Mobile/Some/Heart.svg" alt="Heart" />
        <p>Бажанні</p>
      </div>
      <div>
        <img src="/Mobile/Some/Cart.svg" alt="Cart" />
        <p>Кошик</p>
      </div>
    </div>
  );
};

export default MobileBottomMenu;
