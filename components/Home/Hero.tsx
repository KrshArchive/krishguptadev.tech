import styles from "styles/components/Hero.module.scss";

import Image from "next/image";
import Link from "next/link";

const Hero: React.FunctionComponent<{}> = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>Engineering Experiences</h1>
        <div className={styles.hero__chips}>
          <div className={styles.hero__chip}>Webdev</div>
          <div className={styles.hero__chip}>Full Stack</div>
          <div className={styles.hero__chip}>Open Source</div>
        </div>
        <p className={styles.hero_text}>
          I am Krish Gupta, an enthusiast apprentice and open source
          contributor. I love to learn new things and grow my network. I create
          awesome experiences remarkably most of the times unforgettable with
          code. I love to help people, collaborate and contribute.
        </p>
        <Link href="/contact">
          <a className={styles.hero__btn}>Let&#39;s collaborate</a>
        </Link>
      </div>
      <div className={styles.hero__media}>
        <div className={styles.hero__image}>
          <Image src="/krishguptadev.png" alt="Krish Gupta's Avatar" layout="intrinsic" height={300} width={300} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
