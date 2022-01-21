import Link from 'next/link';
import styles from './bottom-nav.module.css';

export default function BottomNav() {
    return (
        <nav className={styles.nav} role='navigation'>
            <ul className={styles.linkList}>
                <li className={styles.linkListItem}>
                    <Link href='/quote'>
                        <a className={styles.link}>
                            <span>Quote</span>
                        </a>
                    </Link>
                </li>
                <li className={styles.linkListItem}>
                    <a href='tel:952-201-9725' className={styles.link}>
                        <span>Call</span>
                    </a>
                </li>
                <li className={styles.linkListItem}>
                    <Link href='/rates'>
                        <a className={styles.link}>
                            <span>Rates</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
