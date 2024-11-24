import React from "react";
import ContentBlock from "../СontentBlock/ContentBlock";
import Paginatop from "../Paginator/Paginator";
import Image1 from "../../images/image1.png";
import Image2 from "../../images/image2.png";
import News from "../News/News";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";
import ButtonBig from "../ButtonBig/ButtonBig";


export default function Main() {
  return (
    <main>
      <div className="row">
        <div className="large-9 column">
          <div className="row">
            <div className="column">
              <ContentBlock
                classes={{
                  big: "content-block_big",
                }}
                height={"280px"}
                buttonText="Категория 1"
                headingText="Управление ИТ-активами – скучная рутина или творческая задача?"
                contentText="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще."
              />
            </div>

            <div className="medium-8 column">
              <ContentBlock
                height={"400px"}
                buttonText="Категория 1"
                headingText="Управление ИТ-активами – скучная рутина или творческая задача?"
                contentText="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще."
              />
            </div>
            <div className="medium-4 column">
              <ContentBlock
                classes={{
                  accent: "content-block_accent",
                  btn: "button_accent",
                  heading: "content-block__heading_accent",
                  data: "content-block__data_accent",
                }}
                content={false}
                height={"400px"}
                buttonText="Категория 1"
                headingText="ITAM&SAMDay – самая настоящая удача!"
              />
            </div>

            <div className="hide-for-medium-down">
              <div className="medium-4 column">
                <ContentBlock
                  classes={{
                    accent: "content-block_accent",
                    picture: "content-block_accent_with_picture",
                    btn: "button_accent",
                    heading: "content-block__heading_accent",
                    data: "content-block__data_accent",
                  }}
                  height={"400px"}
                  backgroundImg={`url(${Image1})`}
                  buttonText="Очень длинная категория 2"
                  headingText="Управление ИТ-активами – скучная рутина или творческая задача?"
                />
              </div>
              <div className="medium-8 column">
                <ContentBlock
                  classes={{ noСontent: "content-block_no_content" }}
                  height={"180px"}
                  buttonText="Категория 1"
                  headingText="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
                />
              </div>
              <div className="medium-8 column">
                <ContentBlock
                  classes={{ noСontent: "content-block_no_content" }}
                  height={"180px"}
                  buttonText="Категория 1"
                  headingText="ITAM&SAMDay – самая настоящая удача!"
                />
              </div>
            </div>

            <div className="medium-8 column hide-for-medium-down">
              <ContentBlock
                height={"400px"}
                buttonText="Категория 1"
                headingText="Управление ИТ-активами – скучная рутина или творческая задача?"
                contentText="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще."
              />
            </div>
            <div className="medium-4 column">
              <ContentBlock
                classes={{
                  accent: "content-block_accent",
                  btn: "button_accent",
                  heading: "content-block__heading_accent",
                  data: "content-block__data_accent",
                }}
                height={"400px"}
                buttonText="Очень длинная категория 2"
                headingText="ITAM&SAMDay – самая настоящая удача!"
              />
            </div>

            <div className="medium-4 column hide-for-medium-down">
              <ContentBlock
                classes={{
                  accent: "content-block_accent",
                  picture: "content-block_accent_with_picture",
                  btn: "button_accent",
                  heading: "content-block__heading_accent",
                  data: "content-block__data_accent",
                }}
                height={"400px"}
                backgroundImg={`url(${Image2})`}
                buttonText="Категория 1"
                headingText="Управление ИТ-активами – скучная рутина или творческая задача?"
              />
            </div>
            <div className="medium-8 column">
              <ContentBlock
                classes={{ noСontent: "content-block_no_content" }}
                height={"180px"}
                buttonText="Категория 1"
                headingText="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
              />
            </div>
            <div className="medium-8 column">
              <ContentBlock
                classes={{ noСontent: "content-block_no_content" }}
                height={"180px"}
                buttonText="Категория 1"
                headingText="ITAM&SAMDay – самая настоящая удача!"
              />
            </div>
            <div className="column">
              <Paginatop />
            </div>
            <div className="column">
              <ButtonBig
                buttonText="Показать ещё 6"
                classes={{
                  show: "button-big_show",
                }}
              />
            </div>
          </div>
        </div>
        <div className="large-3 column">
          <section className="news-block">
            <h1>Популярные новости</h1>
            <div className="news-block__content">
              <News
                linkText="ITAM&SAMDay – самая настоящая удача!"
                dataText="13 дек 2020"
              />
              <News
                linkText="Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ..."
                dataText="10 дек 2020"
              />
              <News
                linkText="Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?"
                dataText="5 дек 2020"
              />
            </div>
          </section>

          <SubscriptionForm />
        </div>
      </div>
    </main>
  );
}
