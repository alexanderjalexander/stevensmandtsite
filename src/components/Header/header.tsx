import Link from "next/link"
import styles from "./header.module.css"

const links = [
    { link: '/', label: 'Home' },
    { link: '/studiobooking', label: 'Studio Booking' },
    { link: '/community', label: 'Community' },
    { link: '/directory', label: 'Directory' },
    { link: '/about', label: 'About' },
];

export function Header() {
    const items = links.map((link) => (
        <Link href={link.link} key={link.label} className={styles.links}> {link.label} </Link>
    ));

    return (
        <div className={styles.header}>
            <div className={styles.header_content}>
                <h2><Link className={styles.links} href="/">M&T | SIT</Link></h2>
                <div className={styles.links_container}>
                    {items}
                </div>
            </div>
        </div>
    );
}