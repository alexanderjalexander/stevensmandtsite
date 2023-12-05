"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import {Burger, Drawer, Flex, Group, UnstyledButton} from "@mantine/core";
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
    const [menu_opened, { toggle:menu_toggle, close:close_menu }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link href={link.link} key={link.label} className={styles.links}> {link.label} </Link>
    ));

    const menu_items = links.map((link) => (
        <Link href={link.link} key={link.label} onClick={close_menu} className={styles.menu_links}> {link.label} </Link>
    ));

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_content}>
                {/* Default Navbar */}
                <Link  className={styles.home_link} href="/"><h2>M&T | SIT</h2></Link>
                <Group visibleFrom="sm" className={styles.links_container} hidden={false}>
                    {items}
                </Group>
                <Burger
                    mt="auto"
                    mb="auto"
                    opened={menu_opened}
                    onClick={menu_toggle}
                    size="sm"
                    hiddenFrom="sm"
                />
            </div>
            <div>
                {/* Burger Menu for Mobile */}
                <Drawer
                    opened={menu_opened}
                    onClose={close_menu}
                    size="100%"
                    padding="xl"
                    c="#191528"
                    hiddenFrom="sm"
                >
                    <Flex
                        gap="md"
                        justify="flex-start"
                        align="flex-start"
                        direction="column">
                        {menu_items}
                    </Flex>
                </Drawer>
            </div>
        </div>
    );
}