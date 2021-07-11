import Link from 'next/link';
import { BiCart } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { MdPermIdentity } from 'react-icons/md';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/logo.svg" alt="logo corebiz" />
        </a>
      </Link>

      <form className={styles.form}>
        <input type="text" placeholder="O que está procurando ?" />
        <button>
          <FiSearch size={15} />
        </button>
      </form>

      <Link href="/">
        <a className={styles.count}>
          <MdPermIdentity width={10} />
          Minha conta
        </a>
      </Link>

      <Link href="/">
        <a>
          <BiCart size={30} />
        </a>
      </Link>
    </header>
  );
}
