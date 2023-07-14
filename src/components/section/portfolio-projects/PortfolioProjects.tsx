import { useState, useRef, useEffect } from 'react';
import styles from './PortfolioProjects.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import portfolioDB from '@/db/portfolio.db';

const PortfolioProjects = () => {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const handleChange = () => {
    const items = listRef.current!.children;
    const arr = Array.from(items);

    arr[0].classList.add(styles.active);

    arr.forEach((item) => {
      item.addEventListener('mouseover', (event: any) => {});
    });
  };

  return (
    <section className={styles.portfolio__projects}>
      <nav>
        <ul ref={listRef}>
          <li>ВСЕ</li>
          <li>БРЕНДИНГ</li>
          <li>САЙТЫ</li>
        </ul>
      </nav>
      <ul>
        {portfolioDB.map((item) => (
          <li key={item.id}>
            <Image src={'/static/media' + item.image} alt='' fill />
            <Link href={`/portfolio/${item.id}`}>{item.title}</Link>
            <p>
              {item.type === 'branding'
                ? 'Разработка логотипа'
                : 'Создание сайта'}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PortfolioProjects;
