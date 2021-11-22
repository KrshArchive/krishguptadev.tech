import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/modules/Home.module.scss";

import Navbar from 'components/Global/Navbar';
import Hero from 'components/Home/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Engineering Experiences | Full Stack Developer | Krish Gupta
        </title>
        <meta
          name="description"
          content="Krish Gupta, An Open Source Full Stack Software Developer Engineering Experiences! Loves Open Source, Programming and Tech."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default Home;
