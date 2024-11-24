import React from "react";
import ButtonBig from "../ButtonBig/ButtonBig";
import "./style.scss";


export default function SubscriptionForm() {
  return (
    <section className="subscription-form">
      <h1>Подписка на рассылку</h1>

      <form action="#" method="post">
        <input
          type="email"
          id="email"
          name="email"
          className="subscription-input"
          placeholder="Email@gmail.com"
          required
        />
        <ButtonBig
          buttonText="Подписаться"
          classes={{
            subscription: "button-big_subscription",
          }}
        />
      </form>
    </section>
  );
}
