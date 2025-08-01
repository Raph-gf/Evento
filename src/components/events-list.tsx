import { EventItem } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: EventItem[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
