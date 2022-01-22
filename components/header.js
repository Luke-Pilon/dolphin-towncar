import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';
import styles from './header.module.css';

export default function Header() {
    useEffect(() => {
        const sidebar = document.getElementById('sidebar');
        //Add event listener to the hamburger toggle
        //Toggles the sidebar between hidden (-100% left) and visible (0px left)
        document.getElementById('toggle').addEventListener('click', () => {
            sidebar.style.left = sidebar.style.left === '0px' ? '-100%' : '0px';
        });
        //Add event listener to the window. If click is not on the toggle or the sidebar
        //the sidebar will close - allows user to click outside the sidebar instead of only
        //on the toggle to close the sidebar
        window.addEventListener('click', (e) => {
            if (
                !document.getElementById('sidebar').contains(e.target) &&
                !document.getElementById('sidebar-toggle').contains(e.target)
            ) {
                document.getElementById('toggle').checked = false;
                sidebar.style.left = '-100%';
            }
        });
    }, []);
    return (
        <header className={styles.header} id='header'>
            <nav className={styles.nav}>
                <a
                    className={styles.sidebarToggle}
                    id='sidebar-toggle'
                    aria-label='Open navigation menu'
                >
                    <input
                        /* This checkbox controls the display of the hamburger (either hamburger when sidebar is closed or an X when open) */
                        type='checkbox'
                        className={styles.toggler}
                        id='toggle'
                    />
                    <div className={styles.hamburger}>
                        <div></div>
                    </div>
                </a>
                <div className={styles.brandLinkItem}>
                    <Link href='/'>
                        <a className={styles.brandLink}>Dolphin Limo LLC</a>
                    </Link>
                </div>
            </nav>
            <div className={styles.sidebar} id='sidebar'>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/rates'>
                                <a>Rates</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/testimonials'>
                                <a>Testimonials</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
