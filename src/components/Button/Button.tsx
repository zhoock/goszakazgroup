import React from "react";
import "./style.scss";

type ButtonProps = {
  classes?: {
    btn?: string;
  };
  buttonText: string | undefined;
};

export default function Button({
  classes,
  buttonText,
}: ButtonProps) {
  return (
    <button
      className={`button ${classes ? classes.btn : ""}`} type="button"
    >
      {buttonText}
    </button>
  );
}
