import SanCarousel from 'sancarousel';
import { api } from '../services/api';
import { useCart } from 'react-use-cart';
import { useEffect, useState } from 'react';

import styles from './home.module.scss';
import Link from 'next/link';

interface Products {
  productId: number;
  productName: string;
  imageUrl: string;
  listPrice: number;
  price: number;
}

export default function Home({}: Products) {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function convertPrice(price: number) {
    const convertedPrice = price / 100;
    return convertedPrice.toFixed(2);
  }

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
  ];

  return (
    <main className={styles.content}>
      <SanCarousel
        slides={slides}
        spaceBetweenSlides="0px 10px 10px 5px"
        height="350px"
        autoPlay={3000}
      />

      <div className={styles.subTitle}>
        <h2>Mais vendidos</h2>
        <hr />
      </div>

      <section className={styles.cardContainer}>
        {products.map((product) => (
          <div className={styles.card}>
            <Link href="/product">
              <img src={product.imageUrl} alt={product.productName} />
            </Link>
            <p className={styles.description}>{product.productName}</p>
            <span>*****</span>
            <p className={styles.price}>por R${convertPrice(product.price)}</p>
            <button>Comprar</button>
          </div>
        ))}
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
