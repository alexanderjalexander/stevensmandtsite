import {EventCardsCarousel, OpportunityCardsCarousel, ReleasesCardsCarousel} from "@/components/OpportunityCarousel/opportunitycarousel";
import Header from "@/components/Header/header";

export default function Page() {
    return (
        <main>
            <Header text="Music & Tech" />
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
    )
}
