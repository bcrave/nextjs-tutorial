import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <section>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          optio quos eum officiis maxime, sed iusto fugit perferendis id in
          reprehenderit expedita facere voluptates nemo quod repellendus
          suscipit tempore tempora libero molestias dolore obcaecati fuga
          quibusdam iure. Nobis quae aut facere aperiam dicta perferendis,
          tenetur, at similique sint consequuntur ab!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          optio quos eum officiis maxime, sed iusto fugit perferendis id in
          reprehenderit expedita facere voluptates nemo quod repellendus
          suscipit tempore tempora libero molestias dolore obcaecati fuga
          quibusdam iure. Nobis quae aut facere aperiam dicta perferendis,
          tenetur, at similique sint consequuntur ab!
        </p>
        <Link href="/ninjas">
          <button className={styles.btn}>See Ninja Listing</button>
        </Link>
      </section>
    </>
  );
};

export default Home;
