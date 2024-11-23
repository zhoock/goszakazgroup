import React from "react";
import "./style.scss";

type NewsProps = {
  linkText: string;
  dataText: string;
};

export default function News({ linkText, dataText }: NewsProps) {
  return (
    <article className="news-item">
      <a href="#" className="news-title">
        {linkText}
      </a>
      <time dateTime="2020-01-13" className="news-date">
        {dataText}
      </time>
    </article>
  );
}
