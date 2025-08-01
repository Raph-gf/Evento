import { EventItem } from "@/lib/types";
import EventCard from "./event-card";

export default async function EventsList({ city }: { city: string }) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const events: EventItem[] = await response.json();

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px] ">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
