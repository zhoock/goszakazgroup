import React from "react";
import "./style.scss";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <a href="#" title="Главная" className="active">
            Главная
          </a>
        </li>
        <li>
          <a href="#" title="О нас">
            О нас
          </a>
        </li>
        <li>
          <a href="#" title="Контакты">
            Контакты
          </a>
        </li>
        <li>
          <a href="#" title="Поиск">
            Поиск
          </a>
        </li>
        <li>
          <a
            href="tel:+7987887-87"
            title="Телефон"
            className="phone-wrapper"
          >
            <i className="phone-icon">
              <svg
                width="14"
                height="15"
                className="phone-icon"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_116)">
                  <path
                    d="M13.6189 10.7746L11.6652 8.82085C10.9674 8.12308 9.7812 8.40222 9.50209 9.30928C9.29276 9.9373 8.595 10.2862 7.96701 10.1466C6.57148 9.79772 4.68752 7.98353 4.33863 6.51822C4.1293 5.89021 4.54796 5.19244 5.17595 4.98314C6.08305 4.70403 6.36215 3.51783 5.66439 2.82007L3.71064 0.866327C3.15243 0.377891 2.31511 0.377891 1.82668 0.866327L0.500926 2.19208C-0.824828 3.58761 0.640479 7.28576 3.91997 10.5653C7.19947 13.8448 10.8976 15.3799 12.2932 13.9843L13.6189 12.6586C14.1074 12.1003 14.1074 11.263 13.6189 10.7746Z"
                    fill="#5D71DD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_116">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <span className="phone-number">+7 (987) 887-87</span>
          </a>
        </li>
      </ul>
    </>
  );
}
