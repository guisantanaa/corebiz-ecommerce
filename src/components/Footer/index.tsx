import { MdEmail, MdHeadsetMic } from 'react-icons/md';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.cardInfo}>
          <h2>Localização</h2>
          <hr></hr>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </section>

        <section className={styles.button}>
          <button>
            <MdEmail size={18} />
            ENTRE EM CONTATO
          </button>
          <button>
            <MdHeadsetMic size={18} />
            FALE COM O NOSSO CONSULTOR ONLINE
          </button>
        </section>

        <section className={styles.logo}>
          <div className={styles.information}>
            <img src="./corebiz.svg" alt="logo corebiz" />
          </div>

          <div className={styles.information2}>
            <img src="./vtex.svg" alt="logo corebiz" />
          </div>
        </section>
      </footer>
    </>
  );
}
