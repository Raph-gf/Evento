import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city: string;
  page: number;
};

export default async function EventsList({ city, page }: EventListProps) {
  const events = await getEvents(city, page);

  const previousPath = `/events/${city}?page=${page - 1}`;
  const nextPath = `/events/${city}?page=${page + 1}`;

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px] relative ">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
