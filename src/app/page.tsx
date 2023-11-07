import {Carousel, CarouselSlide} from "@mantine/carousel";

const events = [
    { image: 'https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200',
        name: 'HYPERPOP NIGHT',
        desc: "Feat 622CHAOS, COLEMAN.X and SOPHIE SHREDZ",
        time: "7:45 PM",
        date: "9.23.2023",
        location: "Babbio Atrium"
    }
];

export default function Page() {
  return (
    <main>
      <div>
        <h1>Upcoming Events</h1>

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
