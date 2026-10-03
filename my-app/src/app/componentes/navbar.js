'use client';
import Image from 'next/image';
import styles from './navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <Image src="/logo-next2.png" alt="Logo" width={220} height={70} />
            </div>
            <button className={styles.menuButton} onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">
                ☰
            </button>
            <div className={`${styles.links} ${menuAberto ? styles.aberto : ''}`}>
                <a href="#inicio" onClick={() => setMenuAberto(false)}>Inicio</a>
                <a href="#sobre-nos" onClick={() => setMenuAberto(false)}>Sobre Nós</a>
                <a href="#whatsapp" onClick={() => setMenuAberto(false)}>Duvidas</a>
            </div>
            <a href="https://chat.whatsapp.com/KuZlWCbbvtcKduaI3ZTTsc" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>WhatsApp</a>
            
        </nav>
    )
}