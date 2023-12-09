import Header from "@/components/Header/header";
import Link from "next/link";
import {Button} from "@mantine/core";
import {headers} from "next/headers";

export default async function NotFound() {
    return (
        <div>
            <Header text="Not Found"/>
            <main>
                <h1>Whoops, that wasn&apos;t the right link.</h1>
                <p>Something happened between you going from here to there.</p>
                <Button component={Link} href="/">Return Home</Button>
            </main>
        </div>
    )
}