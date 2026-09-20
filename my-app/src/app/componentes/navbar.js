import Image from 'next/image';
import styles from './navbar.module.css';

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <Image src="/logo next.png" alt="Logo" width={220} height={70} />
            </div>
            <div className={styles.links}>
                <a href="#vagas">Área de Vagas</a>
                <a href="#whatsapp">Duvidas</a>
                <a href="#contato">Contato</a>
            </div>
            <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>WhatsApp</a>
            
        </nav>
    )
}