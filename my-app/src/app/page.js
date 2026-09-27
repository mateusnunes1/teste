import styles from './page.module.css';
import Navbar from './componentes/navbar';
import { FaWhatsapp } from "react-icons/fa";

export default function Home(){
  return(
    <>
    <Navbar />
    <main id="inicio"className={styles.main}>
      <div className={styles.conteudo}>
        <h1>Encontre Sua Vaga
        </h1>
        <p>Tire Suas Duvidas com nosso Bot Direto no <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles.codigo}>WhatsApp</a></p>
          <div className={styles.pesquisa}>
          <span className={styles.icone}>⌕</span>
          <input 
          type="text"
         placeholder="Digite o nome da vaga que deseja encontrar"/>
        </div>
        <div>
          <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles.whatsappFlutuante}><FaWhatsapp /></a>
        </div>
        </div>
    </main>
    <section id="sobre-nos" className={styles["sobre-nos-section"]}>
      <div className={styles["sobre-nos-image"]}>
        <img src="./sobre-mim.png" alt="procurando emprego" width={650} height={450} />
      </div>
      <div className={styles["sobre-nos-text"]}>
        <span className={styles["sobre-nos-tag"]}>SOBRE NÓS</span>
        <h2>Sobre a <span className={styles["sobre-nos-nome"]}>NextVaga</span></h2>
        <p>
          A NextVaga é um site de busca de vagas de emprego, onde você pode encontrar a vaga ideal para você.
          Nosso objetivo é facilitar a busca por oportunidades de trabalho, oferecendo uma plataforma intuitiva e eficiente.
        </p>
        <p>
          Com uma experiência de busca de vagas de emprego simplificada e eficiente.Você pode pesquisar vagas por palavra-chave, localização e categoria, além de receber notificações sobre novas oportunidades.
          Estamos comprometidos em ajudar você a encontrar a vaga dos seus sonhos!
        </p>
      </div>
    </section>
    <section id="whatsapp" className={styles["whatsapp-section"]}>
        <div className={styles["whatsapp-text"]}>
          <span className={styles["whatsapp-tag"]}>ATENDIMENTO</span>
          <h2>Tire suas dúvidas<br/>pelo <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles["whatsapp-link"]}>WhatsApp!</a></h2>
          <p>
            Ficou com alguma dúvida sobre uma vaga?
            Nosso atendimento pelo WhatsApp está aqui para ajudar.</p>
          <p>
            Converse com nosso bot, consulte informações sobre as
            oportunidades e encontre respostas para suas dúvidas
            de forma rápida e prática.</p>
          <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles["whatsapp-button"]}>💬 Fale conosco pelo WhatsApp</a>
        </div>
              <div className={styles["whatsapp-image"]}>
        <img src="./duvidas.png" alt="atendimento whatsapp" width={650} height={450} />
      </div>
    </section>
    </>
  );
}