import styles from './Header.module.scss';

import { useWindowSize } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';

import MainDrawer from '../drawer/main/MainDrawer';
import HeaderDrop from './HeaderDrop';

const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <ul>
          <li>
            <a href='#'>+998 94 677 48 51</a>
          </li>
          <li>
            <a href='#'>info@alfalab.uz</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>
              <i className='fa fa-envelope'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles.header__bottom_logo}>
          <Link href='/'>
            <Image
              src='/static/media/logo.png'
              alt=''
              width={150}
              height={30}
            />
          </Link>
        </div>
        {width < 767 ? (
          <MainDrawer />
        ) : (
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
        )}
      </div>
      {/* <HeaderDrop /> */}
    </header>
  );
};

export default Header;
