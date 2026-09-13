import image from 'next/image';
import styles from './page.module.css';

export default function Home(){
  return(
    <main className={styles.main}>
      <div className={styles.logo}>
        <img
          src="/logo next.png"
          alt="Logo"
          width={300}
          height={300}
          />
      </div>
      <div className={styles.conteudo}>
        <h1>Encontre Sua Vaga</h1>
        <p>Tire Suas Duvidas com nosso Bot Direto no <code className={styles.codigo}>WhatsApp</code></p>
          <div className={styles.pesquisa}>
          <span className={styles.icone}>⌕</span>
          <input 
          type="text"
         placeholder="Digite o nome da vaga que deseja encontrar"/>
        </div>
      </div>
    </main>
  )
}