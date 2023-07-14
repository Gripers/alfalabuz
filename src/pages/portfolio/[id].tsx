import styles from '@/styles/SingleProject.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

import portfolioDB from '@/db/portfolio.db';

const SingleProject = () => {
  const { query } = useRouter();

  const currentProject = portfolioDB.find(
    (item) => item.id === Number(query.id)
  );

  return (
    <>
      <section className={styles.single__project}>
        <h1>{currentProject?.title}</h1>
        <p>{currentProject?.description}</p>
      </section>
      <section className={styles.single__project_details}>
        <div className={styles.single__project__details_left}>
          <Image src={'/static/media' + currentProject?.image} alt='' fill />
        </div>
        <div className={styles.single__project__details_right}>
          <h2>Детали проекта</h2>
          <p>{currentProject?.details.description}</p>
          <ul>
            <li>
              <strong>Клиент:</strong>
              <p>{currentProject?.details.client}</p>
            </li>
            <li>
              <strong>Работы:</strong>
              <p>{currentProject?.details.works}</p>
            </li>
            <li>
              <strong>Сайт:</strong>
              <p>{currentProject?.details.website}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
