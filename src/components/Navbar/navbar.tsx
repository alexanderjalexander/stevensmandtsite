"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import {Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

const links = [
    { link: '/', label: 'Home' },
    { link: '/studiobooking', label: 'Studio Booking' },
    { link: '/community', label: 'Community' },
    { link: '/directory', label: 'Directory' },
    { link: '/resources', label: 'Resources' },
    { link: '/about', label: 'About' },
];

export function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link href={link.link} key={link.label} className={styles.links}> {link.label} </Link>
    ));

    // TODO: Implement hamburger menu
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_content}>
                <Link  className={styles.home_link} href="/"><h2>M&T | SIT</h2></Link>
                <Group visibleFrom="sm" className={styles.links_container} hidden={false}>
                    {items}
                </Group>
                <Burger
                    mt="auto"
                    mb="auto"
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                    hiddenFrom="sm"
                />
            </div>
        </div>
    );
}