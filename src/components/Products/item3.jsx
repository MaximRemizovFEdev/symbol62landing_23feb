import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Button/Button";
import * as styles from "../../pages/common.module.css";
import futbolka2 from "../../images/futbolka2.jpg";

const Item3 = () => {
  const images = [
    "https://sun9-61.userapi.com/impg/9Zf2G-ICSKRXXXBvQLwgX7I74DKfuB5cqddixg/bqU6NN3bsw8.jpg?size=479x479&quality=95&sign=7b2bc71208ff59e309afbde4c04adf7e&type=album",
    futbolka2,
  ];
  return (
    <section className={`${styles.block} ${styles.about}`}>
      <h3>#СДнёмЗащитникаОтечества</h3>
      <div className={`${styles.content} ${styles.textRight}`}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true} // Бесконечная прокрутка
          autoplay={{
            delay: 3000, // Автопрокрутка каждые 3 секунды
            disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
          }}
          navigation={true} // Кнопки "вперед" и "назад"
          pagination={{ clickable: true }} // Точки для навигации
          style={{ width: "100%", maxWidth: "479px" }} // Стили для Swiper
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Слайд ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className={styles.text}>
          <ul>
            <li>
              Помощь в составлении и реализации сметы, коммерческое предложение
            </li>
            <li>Бесплатная доставка</li>
            <li>Работа по постоплате</li>
            <li style={{marginTop: "50px"}}>
              <Button
                text="сделать заказ"
                type="button"
                variant="fill"
                onClick={() => {}}
              />
            </li>
          </ul>
        </span>
      </div>
    </section>
  );
};

export default Item3;
