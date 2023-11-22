import Link from "next/link"
import styles from "./navbar.module.css"

const links = [
    { link: '/', label: 'Home' },
    { link: '/studiobooking', label: 'Studio Booking' },
    { link: '/community', label: 'Community' },
    { link: '/directory', label: 'Directory' },
    { link: '/resources', label: 'Resources' },
    { link: '/about', label: 'About' },
];

export function Navbar() {
    const items = links.map((link) => (
        <Link href={link.link} key={link.label} className={styles.links}> {link.label} </Link>
    ));

    // TODO: Implement hamburger menu at some point with all the resources as well
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_content}>
                <Link  className={styles.home_link} href="/"><h2>M&T | SIT</h2></Link>
                <div className={styles.links_container} hidden={false}>
                    {items}
                </div>
            </div>
        </div>
    );
}