"use client"
// TODO: Figure out why the use client is required and how to bypass
import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from "next/link";
import styles from "./header.module.css"

const links = [
    { link: '/', label: 'Home' },
    { link: '/studiobooking', label: 'Studio Booking' },
    { link: '/community', label: 'Community' },
    { link: '/directory', label: 'Directory' },
    { link: '/about', label: 'About' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link href={link.link} key={link.label}> {link.label} </Link>
    ));

    return (
        <div>
            <Group justify="space-around">
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                <h2 text-decoration="none"><Link href="/">M&T</Link></h2>
                <Group ml={50} gap={5} visibleFrom="sm">
                    {items}
                </Group>
                <Autocomplete
                    placeholder="Search"
                    data={['Booking']}
                    visibleFrom="xs"
                />
            </Group>
        </div>
    );
}