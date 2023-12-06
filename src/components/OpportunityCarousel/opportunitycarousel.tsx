"use client"

import '@mantine/carousel/styles.css';
import classes from './opportunitycarousel.module.css';

import {Carousel} from "@mantine/carousel";
import {Paper, Text, Image, Title, Card, Flex, Button} from '@mantine/core';
import Link from "next/link";

// TODO: Implement Google Sheets API or some database of the sort to control events/opportunities/artists
// --> USE VERCEL ENVIRONMENT VARIABLES FOR API KEYS

const events = [
    {
        image: 'https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200',
        name: 'THING',
        desc: "idk some desc",
        time: "7:45 PM",
        date: "9.23.2023",
        location: "Babbio Atrium"
    },
    {
        image: 'https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200',
        name: 'Fall Open Mic',
        desc: "Lorem Ipsum Lorem Ipsum",
        time: "7:45 PM",
        date: "9.30.2023",
        location: "asdfasejfoiasjefo"
    },
    {
        image: 'https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200',
        name: 'Fall Open Mic',
        desc: "Lorem Ipsum Lorem Ipsum",
        time: "7:45 PM",
        date: "9.30.2023",
        location: "asdfasejfoiasjefo"
    },
    {
        image: 'https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200',
        name: 'Fall Open Mic',
        desc: "Lorem Ipsum Lorem Ipsum",
        time: "7:45 PM",
        date: "9.30.2023",
        location: "asdfasejfoiasjefo"
    }
]

const opportunities = [
    {
        name: "Paid Internship on Experimental Music Production",
        desc: "This is the concert festival I(Lainie) organize - hundreds of music makers all getting together to make noise and nerd out! Apply apply apply!",
        link: "/"
    },
    {
        name: "Fully remote full time job - marketing/admin for cool Portland ensemble",
        desc: "This is the concert festival I(Lainie) organize - hundreds of music makers all getting together to make noise and nerd out! Apply apply apply!",
        link: "/"
    }
]

const releases = [
    {
        title: "Bug Bites",
        artist: "Business Radical",
        image: "https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200",
        link: "/"
    },
    {
        title: "Cyclops",
        artist: "Sahil Navini",
        image: "https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200",
        link: "/"
    }
]

interface EventCardProps {
    image: string,
    name: string,
    desc: string,
    time: string,
    date: string,
    location: string
}

function EventCard({image, name, desc, time, date, location}: EventCardProps) {
    return (
        <Card bg="#564f70" shadow="md" radius="lg" padding="lg">
            <Card.Section>
                <Paper
                    p="xl"
                    withBorder
                    style={{ backgroundImage: `url(${image})` }}
                    className={classes.card}>

                    <Flex justify="space-between"
                           w="100%"
                           align="flex-end"
                           wrap="nowrap"
                           mt="auto">
                        <Text className={classes.category} size="md">
                            {location}
                        </Text>
                        <Flex direction="column" align="flex-end">
                            <Text className={classes.category} size="md">
                                {time}
                            </Text>
                            <Text className={classes.category} size="md">
                                {date}
                            </Text>
                        </Flex>
                    </Flex>
                </Paper>
            </Card.Section>
            <Title order={3} className={classes.title}>
                {name}
            </Title>
            <Text className={classes.category} size="xs">
                {desc}
            </Text>
        </Card>
    )
}

export function EventCardsCarousel() {
    // const theme = useMantineTheme();
    // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = events.map((item) => (
        <Carousel.Slide key={item.name}>
            <EventCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{base: '80%', sm: '50%'}}
            slideGap={{base: 'md'}}
            loop
            align="center"
            slidesToScroll={1}
        >
            {slides}
        </Carousel>
    );
}

interface OpportunityCardProps {
    name: string,
    desc: string,
    link: string
}

function OpportunityCard({name, desc, link}: OpportunityCardProps) {
    return (
        <Card bg="#262235" shadow="md" radius="lg" padding="lg">
            <h2 className={classes.title}>{name}</h2>
            <Text>{desc}</Text>
            <Link href={link}>Read More</Link>
        </Card>
    )
}

export function OpportunityCardsCarousel() {
    const slides = opportunities.map((item) => (
        <OpportunityCard key={item.name} {...item} />
    ));

    return (
        <Flex   justify="space-between"
                w="100%"
                align="center"
                direction="column"
                gap="md"
                wrap="wrap"
                mt="auto">
            {slides}
        </Flex>
    );
}

interface ReleasesCardProps {
    title: string,
    artist: string,
    image: string,
    link: string
}

function ReleasesCard({title, artist, image, link}: ReleasesCardProps) {
    return (
        <Card bg="#262235" shadow="md" radius="lg" padding="lg">
            <Card.Section pb="md">
                <Image src={image}
                    h="100%"
                    alt=""/>
            </Card.Section>
            <Flex justify="space-between"
                  w="100%"
                  align="center"
                  wrap="nowrap"
                  mt="auto">
                <Flex align="flex-start" direction="column">
                    <Text><b><i>{title}</i></b></Text>
                    <Text>- {artist}</Text>
                </Flex>
                <Button
                    component={Link}
                    href={link}>
                    Listen
                </Button>
            </Flex>
        </Card>
    )
}

export function ReleasesCardsCarousel() {
    // const theme = useMantineTheme();
    // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = releases.map((item) => (
        <Carousel.Slide key={item.title}>
            <ReleasesCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{base: '50%', sm: '25%'}}
            slideGap={{base: 'md'}}
            loop
            align="center"
            slidesToScroll={1}
        >
            {slides}
        </Carousel>
    );
}