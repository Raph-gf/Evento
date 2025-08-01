import { EventItem } from "@/lib/types";

type EventCardProps = {
  event: EventItem;
};

export default function EventCard({ event }: EventCardProps) {
  return <section>{event.name}</section>;
}
