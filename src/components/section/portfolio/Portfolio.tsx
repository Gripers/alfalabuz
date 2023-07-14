import styles from './Portfolio.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import portfolioDB from '@/db/portfolio.db';

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h6>ПОРТФОЛИО</h6>
      <h1>Наши работы</h1>
      <ul>
        {portfolioDB.map((item) => (
          <li key={item.id}>
            <Link href={'/portfolio/' + item.id}>
              <Image src={'/static/media' + item.preview} alt='' fill />
              <i className='fa fa-link'></i>
            </Link>
          </li>
        ))}
      </ul>
      <Link className={styles.link} href='/portfolio'>
        Все проекты -&gt;
      </Link>
    </section>
  );
};

export default Portfolio;
