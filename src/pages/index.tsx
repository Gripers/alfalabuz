import { useEffect } from 'react';
import AOS from 'aos';

import Main from '@/components/section/main/Main';
import WhyUs from '@/components/section/why-us/WhyUs';
import Portfolio from '@/components/section/portfolio/Portfolio';
import Services from '@/components/section/services/Services';
import Nn from '@/components/section/nn/Nn';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Main />
      <WhyUs />
      <Portfolio />
      <Services />
      <Nn />
    </>
  );
}
