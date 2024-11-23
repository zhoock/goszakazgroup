import React from "react";
import Button from "../Button/Button";
import "./style.scss";

export default function Paginator() {
  return (
    <div className="pagination">
      <a href="#" className="prev disabled">
        <Button buttonText="Предыдущая" />
      </a>
      <a href="#" className="page active">
        1
      </a>
      <a href="#" className="page">
        2
      </a>
      <a href="#" className="page">
        3
      </a>
      <a href="#" className="page">
        4
      </a>
      <span className="dots">...</span>
      <a href="#" className="page">
        10
      </a>
      <a href="#" className="next">
        <Button
          buttonText="Следующая"
          classes={{
            btn: "button_pointer",
          }}
        />
      </a>
    </div>
  );
}
