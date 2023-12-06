import Header from "@/components/Header/header";
import Link from "next/link";
import {Button} from "@mantine/core";

export default function NotFound() {
    return (
        <div>
            <Header text="Page Not Found"/>
            <main>
                <h1>Whoops, that wasn't the right link.</h1>
                <p>Something happened between you going from here to there.</p>
                <Button component={Link} href="/">Return Home</Button>
            </main>
        </div>
    )
}