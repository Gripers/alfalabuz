import styles from './AboutUsNn.module.scss';

const AboutUsNn = () => {
  return (
    <section className={styles.aboutus__nn}>
      <div className={styles.aboutus__nn_top}>
        <h1>Индивидуальный подход к каждому клиенту, не забывая о креативе.</h1>
        <p>
          Позиция маркетингового агенства Alfalab заключается в том, что мы не
          просто создают сайты, но и оптимизируют их для дальнейшего продвижения
          в поисковых системах
        </p>
      </div>
      <div className={styles.aboutus__nn_bottom}>
        <div className={styles.aboutus__nn__bottom_left}>
          <h1>Преимущества</h1>
          <p>
            Мы в Alfalab проводим тщательный анализ рынка, чтобы добиваться
            максимальной эффективности изучив конкурентов, чтобы перенять лучшие
            качества, а также избежать частых ошибок. Мы не игнорируем обратную
            связь. Всё это позволило нашей компании стать самой эффективной в
            нише. Более 90% клиентов остаются довольными после сотрудничества с
            нами.
          </p>
        </div>
        <div className={styles.aboutus__nn__bottom_right}>
          <ul>
            <li>
              <div>
                <b>Маркетинг</b>
                <b>90%</b>
              </div>
              <div className={styles.aboutus__nn__bottom__right_progress}>
                <div
                  data-width='90%'
                  className={styles.aboutus__nn__bottom__right__progress_inn}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <b>Дизайн</b>
                <b>100%</b>
              </div>
              <div className={styles.aboutus__nn__bottom__right_progress}>
                <div
                  data-width='100%'
                  className={styles.aboutus__nn__bottom__right__progress_inn}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <b>Анализ</b>
                <b>80%</b>
              </div>
              <div className={styles.aboutus__nn__bottom__right_progress}>
                <div
                  data-width='80%'
                  className={styles.aboutus__nn__bottom__right__progress_inn}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <b>Креативность</b>
                <b>100%</b>
              </div>
              <div className={styles.aboutus__nn__bottom__right_progress}>
                <div
                  data-width='100%'
                  className={styles.aboutus__nn__bottom__right__progress_inn}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsNn;
