import SanCarousel from 'sancarousel';
import styles from './home.module.scss';

export default function Home() {
  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1603191659812-ee978eeeef76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      img: 'https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      img: 'https://images.unsplash.com/photo-1619223517625-3ec487a7c1d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      img: 'https://images.unsplash.com/photo-1542219550-37153d387c27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
  ];

  return (
    <main className={styles.content}>
      <SanCarousel
        slides={slides}
        spaceBetweenSlides="0px 10px 10px 5px"
        height="350px"
        autoPlay={2000}
      />

      <div className={styles.subTitle}>
        <h2>Mais vendidos</h2>
        <hr></hr>
      </div>

      <section className={styles.cardContainer}>
        <div className={styles.card}>
          <img src="./sapato1.svg" alt="produto sapato" />
          <p className={styles.description}>SAPATO FLOATER PRETO</p>
          <span>*****</span>
          <p className={styles.price}>por R$ 259,90</p>
          <button>Adicionar ao carrinho</button>
        </div>

        <div className={styles.card}>
          <img src="./sapato2.svg" alt="produto sapato" />
          <p className={styles.description}>SANDÁLIA LINHO BROWN</p>
          <span>*****</span>
          <p className={styles.price}>por R$ 199,90</p>
          <button>Adicionar ao carrinho</button>
        </div>

        <div className={styles.card}>
          <img src="./bota.svg" alt="produto sapato" />
          <p className={styles.description}>BOTA MUSTANG PRETO</p>
          <span>*****</span>
          <p className={styles.price}>por R$ 299,90</p>
          <button>Adicionar ao carrinho</button>
        </div>

        <div className={styles.card}>
          <img src="./cinto.svg" alt="produto sapato" />
          <p className={styles.description}>CINTO SEMICRONO PRETO </p>
          <span>*****</span>
          <p className={styles.price}>por R$ 79,90</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </section>

      <div className={styles.Form}>
        <h3>Participe de nossas news com promoções e novidades</h3>
        <form>
          <input type="name" name="name" placeholder="Digite seu nome" />
          <input type="e-mail" name="email" placeholder="Digite seu email" />
          <button>Eu quero</button>
        </form>
      </div>
    </main>
  );
}
