"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import {Burger, Drawer, Flex, Group, HoverCard} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {links} from "@/config/siteconfig";

export function Navbar() {
    const [menu_opened, { toggle:menu_toggle, close:close_menu }] = useDisclosure(false);

    const items = links.map((link) =>
        link.children === undefined ? (
            <Link href={link.link}
                  key={link.label}
                  className={styles.links}>
                {link.label}
            </Link>
        ) : (
            <HoverCard key={link.label}>
                <HoverCard.Target>
                    <Link href={link.link}
                          className={styles.links}>
                        {link.label}
                    </Link>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {link.children.map((sublink) =>
                        <Link href={link.link + sublink.link}
                              key={sublink.label}
                              className={styles.links}>
                            {sublink.label}
                        </Link>
                    )}
                </HoverCard.Dropdown>
            </HoverCard>
        )
    );

    const menu_items = links.map((link) => (
        link.children === undefined ? (
            <Link href={link.link}
                  key={link.label}
                  onClick={close_menu}
                  className={styles.menu_links}>
                {link.label}
            </Link>
        ) : (
            <Link href={link.link}
                  key={link.label}
                  onClick={close_menu}
                  className={styles.menu_links}>
                {link.label}
                <Flex
                    gap="lg"
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    className="pt-5">
                    {link.children.map(
                        (sublink) => (
                            <Link
                                href={link.link + sublink.link}
                                key={sublink.label}
                                onClick={close_menu}
                                className={styles.menu_sublinks}>
                                &#9;{sublink.label}
                            </Link>
                        )
                    )}
                </Flex>
            </Link>
        )
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
                        gap="lg"
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