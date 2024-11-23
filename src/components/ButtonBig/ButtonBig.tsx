import React from "react";
import "./style.scss";

type ButtonBigProps = {
  buttonText: string;
  classes: {
    subscription?: string;
    show?: string;
  };
};
export default function ButtonBig({ buttonText, classes }: ButtonBigProps) {
  return (
    <button
      type="submit"
      className={`button-big ${classes ? classes.subscription : ""} ${classes ? classes.show : ""}`}
    >
      {buttonText}
    </button>
  );
}
