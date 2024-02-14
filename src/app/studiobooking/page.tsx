import Header from "@/components/Header/header";
import {Button} from "@mantine/core";

export default function Page() {
    return (
        <div>
            <Header text="Studio Booking"/>
            <main>
                <Button m="auto" component="a" target="_blank" href="https://tinyurl.com/K350BookingApplication">
                    Book Here
                </Button>
                <p>Special Bookings are ONLY for professor-sanctioned ensembles (Ex. HMU 498), and Senior Thesis work. Questions about what activities are eligible for bookings can be emailed to <a href="mailto:shuashua@stevens.edu">shuashua@stevens.edu</a>. Other work (classwork, personal work, etc) can be done during open monitor hours.</p>
                <p>Please apply at least 48 hours before the desired times. Bookings can only be made during monitor hours and not during any classes.</p>

            {/* TODO: Add static lab hours assets */}
            </main>
        </div>
    )
}