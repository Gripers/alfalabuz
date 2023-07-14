import styles from './History.module.scss';

import Image from 'next/image';

const History = () => {
  return (
    <section className={styles.history}>
      <div className={styles.history__left}>
        <Image src='/static/media/flags.jpeg' alt='' fill />
      </div>
      <div className={styles.history__right}>
        <ul>
          <li>
            <Image
              src='/static/media/target.png'
              alt=''
              width={50}
              height={50}
            />
            <div>
              <h3>Более 8 лет на рынке</h3>
              <p>
                Мы дорожим своим опытом и репутацией за более чем 8 лет работы и
                всегда рады предоставить актуальные инструменты продвижения
              </p>
            </div>
          </li>
          <li>
            <Image
              src='/static/media/rocket.png'
              alt=''
              width={50}
              height={50}
            />
            <div>
              <h3>Актуальные инструменты продвижение</h3>
              <p>
                Подберем только актуальные инструменты для рекламы для более
                эффективного результата
              </p>
            </div>
          </li>
          <li>
            <Image
              src='/static/media/startegy.png'
              alt=''
              width={50}
              height={50}
            />
            <div>
              <h3>Уникальность = креативности</h3>
              <p>
                Креативная команда которая нацелена отличатся от оригинальных
                реклам, которому многие привыкли
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default History;
