import styles from './Footer.module.scss';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Image src='/static/media/logo.png' alt='' width={150} height={30} />
        <p>Alfalab — Маркетинговое агентство полного цикла в Ташкенте</p>
        <ul>
          <li>
            <a href='#'>+998 94 677 48 51</a>
          </li>
          <li>
            <a href='#'>info@alfalab.uz</a>
          </li>
          <li>
            <p>Улица Паркент 329A, Ташкент</p>
          </li>
        </ul>
        <ul className={styles.icons}>
          <li>
            <a href='#' target='_blank'>
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='#' target='_blank'>
              <i className='fa fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='#' target='_blank'>
              <i className='fa fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
