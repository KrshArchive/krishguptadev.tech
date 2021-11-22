import Link from 'next/link';
import styles from "styles/components/Navbar.module.scss";

const Navbar: React.FunctionComponent<{}> = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" passHref={true}>
          <a className={styles.navbar__brand}>Krish Gupta</a>
        </Link>
        <div className={styles.navbar__menu}>
          <Link href="/projects">
            <a className={styles.navbar__link}>Projects</a>
          </Link>
          <Link href="/skills">
            <a className={styles.navbar__link}>Skills</a>
          </Link>
          <Link href="/about">
            <a className={styles.navbar__link}>About</a>
          </Link>
          <Link href="/contact">
            <a className={styles.navbar__link}>Contact</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
