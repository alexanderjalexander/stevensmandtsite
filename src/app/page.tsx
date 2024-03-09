import {EventCardsCarousel, OpportunityCardsCarousel, ReleasesCardsCarousel} from "@/components/opportunitycarousel";
import Header from "@/components/Header/header";

export default function Page() {
    return (
        <div>
            <Header text="Music & Tech"/>
            <main>
                <div>
                    <h1>Upcoming Events</h1>
                    <EventCardsCarousel />
                </div>

                <div className="pt-8">
                    <h1>Opportunities</h1>
                    <OpportunityCardsCarousel />
                </div>

                <div className="pt-8">
                    <h1>New Releases</h1>
                    <p>Explore music created by the Music and Technology community at Stevens.</p>
                    <ReleasesCardsCarousel />
                </div>
            </main>
        </div>
    )
}
