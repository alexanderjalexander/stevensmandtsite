import styles from './footer.module.css'
import Link from "next/link";

export function Footer() {
    return (
        <div className={styles.footer_base}>
            <Link className={styles.footer_link} href="/">BOOK A STUDIO SESSION</Link>
            <Link className={styles.footer_link} href="/">CONTACT</Link>
            <Link className={styles.footer_link} href="/">INSTAGRAM</Link>
            <Link className={styles.footer_link} href="/">YOUTUBE</Link>
        </div>
    )
}