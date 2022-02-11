import styles from './desktop-header.module.css';
import Link from 'next/link';

export default function DesktopHeader() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/#rates'>
                        <a>Rates</a>
                    </Link>
                </li>
                <li>
                    <Link href='/#testimonials'>
                        <a>Testimonials</a>
                    </Link>
                </li>
                <li>
                    <Link href='/#about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/#contact'>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
