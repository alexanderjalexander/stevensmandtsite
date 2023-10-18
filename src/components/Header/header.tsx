"use client"
import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from "next/link";
// import classes from './HeaderSearch.module.css';

const links = [
    { link: '/', label: 'Home' },
    { link: '/studiobooking', label: 'Studio Booking' },
    { link: '/community', label: 'Community' },
    { link: '/directory', label: 'Directory' },
    { link: '/about', label: 'Page' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link href={link.link} key={link.label}> {link.label} </Link>
    ));

    return (
        <div>
            <Group>
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                <h2>M&T</h2>
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