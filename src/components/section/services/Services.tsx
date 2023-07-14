import styles from './Services.module.scss';

import Image from 'next/image';

import servicesDB from '@/db/services.db';

const Services = () => {
  return (
    <section className={styles.services} id='services'>
      <div className={styles.services__wrapper}>
        <div className={styles.services__wrapper_top}>
          <b>РЕКЛАМНЫЕ УСЛУГИ ПОЛНОГО ЦИКЛА</b>
          <strong>
            Правильное решение и инструменты для развития вашего бренда
          </strong>
        </div>
        <ul className={styles.services__wrapper_bottom}>
          {servicesDB.map((item) => (
            <li key={item.id}>
              <Image src={item.image} alt='' width={50} height={50} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
