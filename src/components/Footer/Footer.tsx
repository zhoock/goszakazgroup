import React from "react";
import Logo from "../Logo/Logo";
import "./style.scss";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <Logo />
        <nav role="navigation">
          <a href="#" title="О нас">
            О нас
          </a>
          <a href="#" title="Галерея">
            Галерея
          </a>
          <a href="#" title="Новости">
            Новости
          </a>
          <a href="#" title="Контакты">
            Контакты
          </a>
        </nav>

        <div className="copyright">
          ООО “Организация” 2020. Все права защищены
        </div>
      </div>
    </footer>
  );
}
