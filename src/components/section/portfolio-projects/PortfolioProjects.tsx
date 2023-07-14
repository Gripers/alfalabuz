import { useState, useRef, useEffect } from 'react';
import styles from './PortfolioProjects.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import portfolioDB from '@/db/portfolio.db';

const PortfolioProjects = () => {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  let filterBy: string;

  if (active === 0) filterBy = 'all';
  else if (active === 1) filterBy = 'branding';
  else filterBy = 'website';

  const handleChange = () => {
    const items = listRef.current!.children;

    for (const index in items) {
      items[index].classList?.remove(styles.active);
    }

    items[active].classList.add(styles.active);
  };

  const filterF = (item: any) => {
    if (filterBy === 'all') return portfolioDB;
    else return item.type === filterBy;
  };

  useEffect(() => {
    handleChange();
  }, [active]);

  return (
    <section className={styles.portfolio__projects}>
      <nav>
        <ul ref={listRef}>
          <li onClick={() => setActive(0)}>ВСЕ</li>
          <li onClick={() => setActive(1)}>БРЕНДИНГ</li>
          <li onClick={() => setActive(2)}>САЙТЫ</li>
        </ul>
      </nav>
      <ul>
        {portfolioDB.filter(filterF).map((item) => (
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
