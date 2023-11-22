import {EventCardsCarousel} from "@/components/OpportunityCarousel/opportunitycarousel";

export default function Page() {
    return (
        <main>
            <div>
                <h1>Upcoming Events</h1>
                <EventCardsCarousel />
            </div>

            <div>
                <h1>Opportunities</h1>
            </div>

            <div>
                <h1>New Releases</h1>
                <p>Explore music created by the Music and Technology community at Stevens.</p>
            </div>
        </main>
    )
}
