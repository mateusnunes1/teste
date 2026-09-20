import image from 'next/image';
import styles from './page.module.css';
import Navbar from './componentes/navbar';

export default function Home(){
  return(
    <>
    <Navbar/>
    <main className={styles.main}>
      <div className={styles.conteudo}>
        <h1>Encontre Sua Vaga</h1>
        <p>Tire Suas Duvidas com nosso Bot Direto no <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles.codigo}>WhatsApp</a></p>
          <div className={styles.pesquisa}>
          <span className={styles.icone}>⌕</span>
          <input 
          type="text"
         placeholder="Digite o nome da vaga que deseja encontrar"/>
        </div>
      </div>
    </main>
      <section id="whatsapp" className={styles["whatsapp-section"]}>
          <div className={styles["whatsapp-text"]}>
          <span className={styles["whatsapp-tag"]}>ATENDIMENTO</span>
          <h2>Tire suas dúvidas<br/>pelo <span>WhatsApp!</span></h2>
          <p>
            Ficou com alguma dúvida sobre uma vaga?
            Nosso atendimento pelo WhatsApp está aqui para ajudar.
          </p>
          <p>
            Converse com nosso bot, consulte informações sobre as
            oportunidades e encontre respostas para suas dúvidas
            de forma rápida e prática.
          </p>
          <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles["whatsapp-button"]}>💬 Fale conosco pelo WhatsApp</a>
        </div>
        <div className={styles["whatsapp-image"]}>
        </div>
      </section>
    </>
  );
}