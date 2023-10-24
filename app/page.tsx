"use client";

import CatalogResult from "@/components/CatalogResult";
import FirstLvlMenu from "@/components/FirstLvlMenu";
import Footer from "@/components/Footer";
import MobileBottomMenu from "@/components/MobileBottomMenu";
import SecondLvlMenu from "@/components/SecondLvlMenu";
import { FC, useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [firstMenu, setFirstMenu] = useState(false);
  const [secondMenu, setSecondMenu] = useState(false);
  const [result, setResult] = useState(false);

  const [openBurger, setOpenBurger] = useState(false);
  const [firstMobileMenu, setFirstMobileMenu] = useState(false);
  const [secondMobileMenu, setSecondMobileMenu] = useState(false);

  const closeAllMobileMenu = useCallback(() => {
    setFirstMobileMenu(false);
    setSecondMobileMenu(false);
    setOpenBurger(false);
  }, []);

  return (
    <>
      <header>
        <div className="header__pre-header">
          <div className="header__phone">
            <span>Відділ продажу:</span>
            <a href="tel:+380673542220">+38 (067) 354 22 20</a>
          </div>
          <div className="header__options">
            <div>
              <span>Ваше місто:</span>
              <select name="select-city" id="city">
                <option value="Одеса">Одеса</option>
                <option value="Київ">Київ</option>
              </select>
            </div>
            <select name="select-lang" id="lang">
              <option value="UA">UA</option>
              <option value="UK">UK</option>
            </select>
            <button>
              <img src="/Some/book.svg" alt="User" />
              Особистий кабінет
            </button>
          </div>
        </div>
        {openBurger || firstMobileMenu || secondMobileMenu ? (
          <div className="mobile-bg"></div>
        ) : null}
        <div className={`header ${openBurger ? "open" : ""}`}>
          <div
            onClick={() => setOpenBurger(false)}
            className="mobile-close-btn">
            <img src="/Mobile/Some/closed.svg" alt="closed" />
          </div>
          <div className="header__logo">
            <img src="/logo.svg" alt="Main Logo" />
          </div>
          <ul className="mobile-menu__lang">
            <li>UA</li>
            <li>RU</li>
            <li>EN</li>
          </ul>
          <div className="header__btns">
            <button
              onMouseEnter={() => setFirstMenu(true)}
              onClick={() => setFirstMobileMenu(true)}>
              <img src="/Some/Catalog.svg" alt="Catalog" />
              Каталог
            </button>
            <button>
              <img src="/Some/Business.svg" alt="Business" />
              Почати бізнес
            </button>
            <div
              className="header__catalog"
              onMouseLeave={() => {
                setSecondMenu(false);
                setFirstMenu(false);
                setResult(false);
              }}>
              <div className="divider"></div>
              <div className="header__lvls">
                {firstMenu && (
                  <FirstLvlMenu onMouseEnter={() => setSecondMenu(true)} />
                )}
                {secondMenu && (
                  <SecondLvlMenu onMouseEnter={() => setResult(true)} />
                )}
                {result && <CatalogResult />}
              </div>
            </div>
          </div>
          <nav className="header__nav">
            <ul>
              <li>Акції</li>
              <li>Про продукцію</li>
              <li>Про компанію</li>
              <li>Доставка</li>
              <li>Блог</li>
              <li>Контакти</li>
            </ul>
          </nav>
          <div className="mobile-menu__about">
            <div>
              <span>Адреса</span>
              <p>04073, м. Київ, вул. Сирецька 28/2</p>
            </div>
            <div>
              <span>Працюємо</span>
              <a href="#">Пн-Нд з 9:00 до 21:00</a>
            </div>
            <div>
              <span>Продаж</span>
              <a href="tel:+380673542220">+38(067) 354 22 20</a>
              <p>20sales@artofcooking.com.ua</p>
            </div>
            <div>
              <span>Закупівля</span>
              <a href="tel:+380673252743">+38 (067) 325 27 43</a>
              <p>purchasing@artofcooking.com.ua</p>
            </div>
          </div>
          <div className="header__icons">
            <button>
              <img src="/Some/Search.svg" alt="Search" />
            </button>
            <button>
              <img src="/Some/Heart.svg" alt="Heart" />
            </button>
            <button>
              <img src="/Some/Cart.svg" alt="Cart" />
            </button>
          </div>
        </div>
        {firstMobileMenu && (
          <FirstLvlMenu
            setSecondMobileMenu={setSecondMobileMenu}
            setFirstMobileMenu={setFirstMobileMenu}
            closeAllMobileMenu={closeAllMobileMenu}
          />
        )}
        {secondMobileMenu && (
          <SecondLvlMenu
            setSecondMobileMenu={setSecondMobileMenu}
            closeAllMobileMenu={closeAllMobileMenu}
          />
        )}
        <div className="header-mobile">
          <button
            onClick={() => setOpenBurger(true)}
            className="header-mobile__burger">
            <img src="/burg.svg" alt="burg" />
          </button>
          <div className="header-mobile__logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="header-mobile__icons">
            <button>
              <img src="/Mobile/Some/Search.svg" alt="Search" />
            </button>
            <button>
              <img src="/Mobile/Some/book.svg" alt="book" />
            </button>
          </div>
        </div>
      </header>
      <div className="main-photo">
        <img src="/main-photo.png" alt="main-photo" />
      </div>
      <div className="main-photo">
        <img src="/main-photo.png" alt="main-photo" />
      </div>
      <MobileBottomMenu setFirstMobileMenu={setFirstMobileMenu} />
      <Footer />
    </>
  );
}
