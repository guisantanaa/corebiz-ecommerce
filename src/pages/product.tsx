import styles from './home.module.scss';

interface Products {
  productId: number;
  productName: string;
  imageUrl: string;
  listPrice: number;
  price: number;
}

export default function Product({}: Products) {
  return (
    <main className={styles.pageProduct}>
      <img src="./bota.svg" alt="imagem do produto" />
      <section className={styles.informationProduct}>
        <h1>Sapato Floater Preto</h1>
        <p>
          por <span>R$ 259,90</span>
        </p>
        <p className={styles.subPrice}>
          Ou em 12x de <span>R$ 21,55</span>
        </p>
        <button>Comprar</button>
        <p className={styles.subPrice}>8% de casback com AME</p>
      </section>
    </main>
  );
}
