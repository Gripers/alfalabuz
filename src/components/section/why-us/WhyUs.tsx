import styles from './WhyUs.module.scss';

import Image from 'next/image';

const WhyUs = () => {
  return (
    <section className={styles.whyus}>
      <ul>
        <li>
          <Image src='/static/media/fst.png' alt='' width={55} height={55} />
          <h3>Креативный подход при разработке сайтов</h3>
          <p>
            Особый подход для каждого бренда при разработке стратегии развитие
          </p>
        </li>
        <li>
          <Image src='/static/media/sec.png' alt='' width={55} height={55} />
          <h3>Современный дизайн при создание логотипа</h3>
          <p>Все наши работы мы создаем исключительно по авторскому дизайну</p>
        </li>
        <li>
          <Image src='/static/media/third.png' alt='' width={55} height={55} />
          <h3>Идеи создание бренда в разработке маркетинга</h3>
          <p>Подберем более подходящий инструмент продвижение вашего бизнеса</p>
        </li>
      </ul>
    </section>
  );
};

export default WhyUs;
