import { useState } from 'react';
import styles from './MainDrawer.module.scss';

import Drawer from 'react-modern-drawer';
import Link from 'next/link';

const MainDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Drawer
        open={open}
        direction='right'
        onClose={handleClose}
        className={styles.drawer}
      >
        <div className={styles.drawer__header}>
          <button className={styles.btn} onClick={handleClose}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </button>
        </div>
        <div className={styles.drawer__body}>
          <nav>
            <ul>
              <li>
                <Link href='/'>Главная</Link>
              </li>
              <li>
                <Link href='/portfolio'>Портфолио</Link>
              </li>
              <li>
                <Link href='/#services'>Услуги</Link>
              </li>
              <li>
                <Link href='/about-us'>О нас</Link>
              </li>
              <li>
                <a href='#'>Позвонить</a>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>
      <button onClick={handleOpen} className={styles.btn}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </button>
    </>
  );
};

export default MainDrawer;
