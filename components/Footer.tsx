import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="footer__nav">
          <ul>
            <li>Про продукцію</li>
            <li>Про компанію</li>
            <li>Акції</li>
            <li>Доставка</li>
            <li>Блог</li>
            <li>Контакти</li>
            <li>Повернення та обмін</li>
          </ul>
        </div>
        <div className="footer__about">
          <h3>Чекаємо на вас</h3>
          <div className="footer__grid">
            <span>Адреса</span>
            <p>04073, м. Київ, вул. Сирецька 28/2</p>
            <span>Працюємо</span>
            <div>
              <p>Пн-нд</p>
              <a href="">з 9:00 до 21:00</a>
            </div>
            <span>Продаж</span>
            <div>
              <a href="">+38(067) 354 22 20</a>
              <p>sales@artofcooking.com.ua</p>
            </div>
            <span>Закупівля</span>
            <div>
              <a href="">+38(067) 354 22 20</a>
              <p>sales@artofcooking.com.ua</p>
            </div>
          </div>
        </div>
        <div className="footer__input">
          <h3>Отримуйте тільки свіжі новини</h3>
          <form>
            <input type="text" placeholder="Ваш E-mail" />
            <button>OK</button>
          </form>
          <div className="footer__social">
            <img src="/logo.svg" alt="logo" />
            <h3>Ми у соцмережах</h3>
            <div className="footer__media">
              <button>
                <img src="/Some/Soc-facebook.svg" alt="facebook" />
              </button>
              <button>
                <img src="/Some/Soc-instagram.svg" alt="instagram" />
              </button>
              <button>
                <img src="/Some/Soc-tiktok.svg" alt="tiktok" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
