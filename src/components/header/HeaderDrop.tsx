import styles from './Header.module.scss';

import { useWindowSize } from 'usehooks-ts';
import Image from 'next/image';

import MainDrawer from '../drawer/main/MainDrawer';

const HeaderDrop = () => {
  const { width } = useWindowSize();

  return (
    <header className={styles.header__drop}>
      <Image src='/static/media/logo.png' alt='' width={100} height={50} />
      {width < 767 ? <MainDrawer /> : <nav></nav>}
    </header>
  );
};

export default HeaderDrop;
