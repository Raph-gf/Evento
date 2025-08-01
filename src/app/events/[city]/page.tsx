import Title from "@/components/Title";
import { EventItem } from "@/lib/types";

type EventPageProps = {
  params: Promise<{ city: string }>;
};

export default async function CityEventsPage({ params }: EventPageProps) {
  const { city } = await params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventItem[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Title>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </Title>
      {events.map(event => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
