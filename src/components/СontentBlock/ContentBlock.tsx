import React from "react";
import Button from "../Button/Button";
import "./style.scss";

type ContentBlockProps = {
  classes?: {
    accent?: string;
    btn?: string;
    heading?: string;
    data?: string;
    noСontent?: string;
    picture?: string;
    big?: string;
  };
  content?: false;
  height: string;
  noСontent?: boolean;
  buttonText?: string;
  headingText?: string;
  contentText?: string;
  backgroundImg?: string;
};

export default function ContentBlock({
  classes,
  height,
  buttonText,
  headingText,
  contentText,
  backgroundImg,
  content,
}: ContentBlockProps) {
  return (
    <section
      className={`content-block ${classes ? classes.accent : ""} ${classes ? classes.picture : ""} ${classes ? classes.big : ""}`}
      style={{
        height: height,
        backgroundImage: backgroundImg,
      }}
    >
      <article>
        <Button classes={classes} buttonText={buttonText} />
        <time
          dateTime="2020/01/13"
          className={`content-block__data ${classes ? classes.data : ""}`}
        >
          13 дек 2020
        </time>

        <h1
          className={`content-block__heading ${classes ? classes.heading : ""}`}
        >
          {headingText}
        </h1>
        {content ? (
          ""
        ) : (
          <p className="content-block__content content-block__content">
            {contentText}
          </p>
        )}
      </article>
    </section>
  );
}
