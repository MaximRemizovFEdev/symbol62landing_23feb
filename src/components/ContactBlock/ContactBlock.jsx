import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";
import vkIcon from "../../images/vk-icon.svg";
import telegramIcon from "../../images/telegram-icon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "./style.module.scss";

const ContactBlock = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    // Здесь вы можете обработать отправку данных формы
    console.log("Имя:", name);
    console.log("Телефон:", phone);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        <h4 className={styles.uppercase}>Свяжитесь с нами</h4>

        <div className={`${styles.row} ${styles.marginTop}`}>
          <div className={styles.col}>
            <a
              className={`${styles.row} ${styles.align}`}
              href="https://vk.com/universymbols"
              target="_blank"
            >
              <img
                src={vkIcon}
                width={40}
                height={40}
                alt={"vk.com/universymbols"}
              />
              <p className={styles.link}>ВКНОТАКТЕ(диалог)</p>
            </a>
            <a href="tel:+79065435369" className={styles.marginTop}>
              +7 (906) 543-53-69
            </a>
          </div>

          <div className={styles.col}>
            <a
              className={`${styles.row} ${styles.align}`}
              href="https://vk.com/universymbols"
              target="_blank"
            >
              <img
                src={telegramIcon}
                width={40}
                height={40}
                alt={"vk.com/universymbols"}
              />
              <p className={styles.link}>TELEGRAM(bot)</p>
            </a>
            <p className={styles.marginTop}>пн-пт, с 9 до 17</p>
          </div>
        </div>

        <h5 className={styles.social}>СОЦ. Сети символка</h5>
        <div className={`${styles.row} ${styles.marginTop}`}>
          <a href="https://vk.com/universymbols" target="_blank">
            <img
              src={vkIcon}
              width={40}
              height={40}
              alt={"vk.com/universymbols"}
            />
          </a>
          <a href="https://vk.com/universymbols" target="_blank">
            <img
              src={telegramIcon}
              width={40}
              height={40}
              alt={"vk.com/universymbols"}
            />
          </a>
        </div>
      </div>

      <div className={styles.col}>
        <h4 className={styles.uppercase}>Заказать звонок</h4>
        <Form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Form.Group controlId="formBasicName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="40"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Номер телефона</Form.Label>
            <InputMask
              mask="+7 999 999 99 99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              {(inputProps) => <Form.Control {...inputProps} required />}
            </InputMask>
          </Form.Group>

          <Form.Text style={{ marginBottom: "10px", color: "#ffffff" }}>
            Заполняя форму, вы даете согласие на{" "}
            <a href="#" className={styles.tagLink}>
              обработку персональных данных и соглашаетесь с политикой
              конфиденциальности.
            </a>
          </Form.Text>

          <Button
            text="Отправить"
            type="button"
            variant="fill"
            onClick={handleSubmit}
            size={null} // it's big
          />
        </Form>
      </div>
    </div>
  );
};

export default ContactBlock;
