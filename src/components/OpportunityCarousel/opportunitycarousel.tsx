"use client"

import '@mantine/carousel/styles.css';
import classes from './opportunitycarousel.module.css';

import {Carousel} from "@mantine/carousel";
import {Paper, Text, Title, useMantineTheme, rem, Card, Group, Flex} from '@mantine/core';
import {useMediaQuery} from "@mantine/hooks";

interface OpportunityCardProps {
    image: string,
    name: string,
    desc: string,
    time: string,
    date: string,
    location: string
}

const data = [
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
    }
]

function OpportunityCard({image, name, desc, time, date, location}: OpportunityCardProps) {
    return (
        <Card shadow="md" radius="lg" withBorder padding="xl">
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

export function OpportunityCardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.name}>
            <OpportunityCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{base: '50%', sm: '50%'}}
            slideGap={{base: rem(2), sm: 'xl'}}
            align="start"
            withIndicators
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}