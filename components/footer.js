import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p>Developed by Luke Pilon Web Designs</p>
                <p>&copy; Dolphin Limo LLC</p>
            </div>
            <div //Use the <div> to allow scrolling to the bottom of the content with the sticky navbar on the bottom of the page
                style={{ clear: 'both', height: '40px' }}
            ></div>
        </footer>
    );
}
