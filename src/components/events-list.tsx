import { EventItem } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: EventItem[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <section>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
