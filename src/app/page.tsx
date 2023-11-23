import {EventCardsCarousel, OpportunityCardsCarousel, ReleasesCardsCarousel} from "@/components/OpportunityCarousel/opportunitycarousel";
import Header from "@/components/Header/header";
import Image from "next/image"

export default function Page() {
    return (
        <div>
            <Header text="Music & Tech"/>
            <main>
                <div>
                    <h1>Upcoming Events</h1>
                    <EventCardsCarousel />
                </div>

                <div>
                    <h1>Opportunities</h1>
                    <OpportunityCardsCarousel />
                </div>

                <div>
                    <h1>New Releases</h1>
                    <p>Explore music created by the Music and Technology community at Stevens.</p>
                    <ReleasesCardsCarousel />
                </div>
            </main>
        </div>
    )
}
