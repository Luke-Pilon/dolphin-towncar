import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';
import styles from './header.module.css';

export default function Header() {
    useEffect(() => {
        document.getElementById('toggle').addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            console.log('toggled');
            sidebar.style.left = sidebar.style.left === '0px' ? '-100%' : '0px';
        });
    }, []);
    return (
        <header className={styles.header} id='header'>
            <nav className={styles.nav}>
                <div className={styles.sidebarToggle}>
                    <input
                        type='checkbox'
                        className={styles.toggler}
                        id='toggle'
                    />
                    <div className={styles.hamburger}>
                        <div></div>
                    </div>
                </div>
                <div className={styles.brandLinkItem}>
                    <Link href='/'>
                        <a className={styles.brandLink}>Dolphin Limo LLC</a>
                    </Link>
                </div>
            </nav>
            <div className={styles.sidebar} id='sidebar'></div>
        </header>
    );
}
